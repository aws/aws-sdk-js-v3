import {Handler, Middleware} from '@aws/types';

interface Step<
    InputType extends object,
    OutputType extends object,
    StreamType
> {
    middleware: Middleware<InputType, OutputType, StreamType>;
    name?: string;
}

/**
 * Builds a single handler function from zero or more middleware functions and a
 * handler. The single handler is meant to send command objects to AWS services
 * and return promises that will resolve with the operation result or be
 * rejected with an error.
 *
 * When a composed handler is invoked, the arguments will pass through all
 * middleware in a defined order, and the return from the innermost handler will
 * pass through all middleware in the reverse of that order. Handlers are
 * ordered using a "step" that describes the step at which the SDK is when
 * sending a command. The available steps are:
 *
 * - init: The command is being initialized, allowing you to do things like add
 *   default options.
 * - build: The command is being serialized into an HTTP request.
 * - sign: The request is being signed and prepared to be sent over the wire.
 *
 * You can add middleware to the top of the stack (i.e., make middleware the
 * first to receive incoming arguments and the last to receive a response) by
 * using the "prependInit" method or to the bottom of the stack (i.e., the first
 * to receive the response and the last to receive incoming arguments) by using
 * the "appendSign" method. Each step has comparable "prepend" and "append"
 * methods.
 *
 * Middleware can be registered with a name to allow you to easily add a
 * middleware before or after another middleware by name. This also allows you
 * to remove a middleware by name (in addition to removing by instance).
 */
export class MiddlewareStack<
    InputType extends object,
    OutputType extends object,
    StreamType = Uint8Array
> {
    private initSteps: Array<Step<InputType, OutputType, StreamType>> = [];
    private buildSteps: Array<Step<InputType, OutputType, StreamType>> = [];
    private signSteps: Array<Step<InputType, OutputType, StreamType>> = [];

    /**
     * Add middleware to be executed after other members of the build phase.
     */
    appendBuild(
        middleware: Middleware<InputType, OutputType, StreamType>,
        name?: string
    ): void {
        this.buildSteps.unshift({middleware, name});
    }

    /**
     * Add middleware to be executed after other members of the init phase.
     */
    appendInit(
        middleware: Middleware<InputType, OutputType, StreamType>,
        name?: string
    ): void {
        this.initSteps.unshift({middleware, name});
    }

    /**
     * Add middleware to be executed after other members of the sign phase.
     */
    appendSign(
        middleware: Middleware<InputType, OutputType, StreamType>,
        name?: string
    ): void {
        this.signSteps.unshift({middleware, name});
    }

    /**
     * Copy the stack into a new instance.
     */
    clone(): MiddlewareStack<InputType, OutputType, StreamType> {
        const stack = new MiddlewareStack<InputType, OutputType, StreamType>();
        stack.initSteps = this.initSteps.slice(0);
        stack.buildSteps = this.buildSteps.slice(0);
        stack.signSteps = this.signSteps.slice(0);
        return stack;
    }

    /**
     * Add middleware to be executed before other members of the build phase.
     */
    prependBuild(
        middleware: Middleware<InputType, OutputType, StreamType>,
        name?: string
    ): void {
        this.buildSteps.push({middleware, name});
    }

    /**
     * Add middleware to be executed before other members of the init phase.
     */
    prependInit(
        middleware: Middleware<InputType, OutputType, StreamType>,
        name?: string
    ): void {
        this.initSteps.push({middleware, name});
    }

    /**
     * Add middleware to be executed before other members of the sign phase.
     */
    prependSign(
        middleware: Middleware<InputType, OutputType, StreamType>,
        name?: string
    ): void {
        this.signSteps.push({middleware, name});
    }

    /**
     * Remove middleware with the provided name or identity.
     */
    remove(nameOrType: string|Middleware<InputType, OutputType, StreamType>): void {
        if (typeof nameOrType === 'string') {
            this.filterSteps(named => nameOrType !== named.name);
        } else {
            this.filterSteps(named => nameOrType !== named.middleware);
        }
    }

    /**
     * Reduce the stack into a composite handler function.
     */
    resolve(
        handler: Handler<InputType, OutputType, StreamType>
    ): Handler<InputType, OutputType, StreamType> {
        for (let steps of [this.signSteps, this.buildSteps, this.initSteps]) {
            for (let step of steps) {
                handler = step.middleware(handler);
            }
        }

        return handler;
    }

    private filterSteps(
        predicate: (
            named: Step<InputType, OutputType, StreamType>
        ) => boolean
    ): void {
        this.initSteps = this.initSteps.filter(predicate);
        this.buildSteps = this.buildSteps.filter(predicate);
        this.signSteps = this.signSteps.filter(predicate);
    }
}
