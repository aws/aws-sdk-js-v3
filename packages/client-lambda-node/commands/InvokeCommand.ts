import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {Invoke} from '../model/Invoke';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {InvokeInput} from '../types/InvokeInput';
import {InvokeOutput} from '../types/InvokeOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';
export * from '../types/InvokeInput';
export * from '../types/InvokeOutput';
export * from '../types/InvokeExceptionsUnion';

export class InvokeCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    InvokeInput,
    OutputTypesUnion,
    InvokeOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        InvokeInput,
        InvokeOutput,
        _stream.Readable
    >();

    constructor(readonly input: InvokeInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<InvokeInput, InvokeOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: Invoke
        };

        return stack.resolve(
            handler<InvokeInput, InvokeOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}