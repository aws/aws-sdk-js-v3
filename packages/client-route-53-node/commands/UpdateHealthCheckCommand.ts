import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdateHealthCheck} from '../model/UpdateHealthCheck';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateHealthCheckInput} from '../types/UpdateHealthCheckInput';
import {UpdateHealthCheckOutput} from '../types/UpdateHealthCheckOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class UpdateHealthCheckCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateHealthCheckInput,
    OutputTypesUnion,
    UpdateHealthCheckOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateHealthCheckInput,
        UpdateHealthCheckOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateHealthCheckInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateHealthCheckInput, UpdateHealthCheckOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateHealthCheck
        };

        return stack.resolve(
            handler<UpdateHealthCheckInput, UpdateHealthCheckOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}