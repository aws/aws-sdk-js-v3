import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {InitiateJob} from '../model/InitiateJob';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {InitiateJobInput} from '../types/InitiateJobInput';
import {InitiateJobOutput} from '../types/InitiateJobOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class InitiateJobCommand implements __aws_types.Command<
    InputTypesUnion,
    InitiateJobInput,
    OutputTypesUnion,
    InitiateJobOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        InitiateJobInput,
        InitiateJobOutput,
        Blob
    >();

    constructor(readonly input: InitiateJobInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<InitiateJobInput, InitiateJobOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: InitiateJob
        };

        return stack.resolve(
            handler<InitiateJobInput, InitiateJobOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}