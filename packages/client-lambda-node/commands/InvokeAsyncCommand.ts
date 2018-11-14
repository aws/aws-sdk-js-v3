import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {InvokeAsync} from '../model/InvokeAsync';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {InvokeAsyncInput} from '../types/InvokeAsyncInput';
import {InvokeAsyncOutput} from '../types/InvokeAsyncOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';

export class InvokeAsyncCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    InvokeAsyncInput,
    OutputTypesUnion,
    InvokeAsyncOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        InvokeAsyncInput,
        InvokeAsyncOutput,
        _stream.Readable
    >();

    constructor(readonly input: InvokeAsyncInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<InvokeAsyncInput, InvokeAsyncOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: InvokeAsync
        };

        return stack.resolve(
            handler<InvokeAsyncInput, InvokeAsyncOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}