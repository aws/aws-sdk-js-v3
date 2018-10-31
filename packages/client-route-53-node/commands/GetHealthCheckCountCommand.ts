import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetHealthCheckCount} from '../model/GetHealthCheckCount';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetHealthCheckCountInput} from '../types/GetHealthCheckCountInput';
import {GetHealthCheckCountOutput} from '../types/GetHealthCheckCountOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetHealthCheckCountCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetHealthCheckCountInput,
    OutputTypesUnion,
    GetHealthCheckCountOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetHealthCheckCountInput,
        GetHealthCheckCountOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetHealthCheckCountInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<GetHealthCheckCountInput, GetHealthCheckCountOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetHealthCheckCount
        };

        return stack.resolve(
            handler<GetHealthCheckCountInput, GetHealthCheckCountOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}