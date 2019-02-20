import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteFunctionConcurrency} from '../model/DeleteFunctionConcurrency';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteFunctionConcurrencyInput} from '../types/DeleteFunctionConcurrencyInput';
import {DeleteFunctionConcurrencyOutput} from '../types/DeleteFunctionConcurrencyOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';
export * from '../types/DeleteFunctionConcurrencyInput';
export * from '../types/DeleteFunctionConcurrencyOutput';
export * from '../types/DeleteFunctionConcurrencyExceptionsUnion';

export class DeleteFunctionConcurrencyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteFunctionConcurrencyInput,
    OutputTypesUnion,
    DeleteFunctionConcurrencyOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteFunctionConcurrencyInput,
        DeleteFunctionConcurrencyOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteFunctionConcurrencyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteFunctionConcurrencyInput, DeleteFunctionConcurrencyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteFunctionConcurrency
        };

        return stack.resolve(
            handler<DeleteFunctionConcurrencyInput, DeleteFunctionConcurrencyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}