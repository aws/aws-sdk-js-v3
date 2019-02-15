import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteItem} from '../model/DeleteItem';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteItemInput} from '../types/DeleteItemInput';
import {DeleteItemOutput} from '../types/DeleteItemOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';
export * from '../types/DeleteItemInput';
export * from '../types/DeleteItemOutput';
export * from '../types/DeleteItemExceptionsUnion';

export class DeleteItemCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteItemInput,
    OutputTypesUnion,
    DeleteItemOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteItemInput,
        DeleteItemOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteItemInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteItemInput, DeleteItemOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteItem
        };

        return stack.resolve(
            handler<DeleteItemInput, DeleteItemOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}