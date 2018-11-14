import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {Query} from '../model/Query';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {QueryInput} from '../types/QueryInput';
import {QueryOutput} from '../types/QueryOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class QueryCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    QueryInput,
    OutputTypesUnion,
    QueryOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        QueryInput,
        QueryOutput,
        _stream.Readable
    >();

    constructor(readonly input: QueryInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<QueryInput, QueryOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: Query
        };

        return stack.resolve(
            handler<QueryInput, QueryOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}