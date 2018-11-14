import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {CreateGlobalTable} from '../model/CreateGlobalTable';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateGlobalTableInput} from '../types/CreateGlobalTableInput';
import {CreateGlobalTableOutput} from '../types/CreateGlobalTableOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class CreateGlobalTableCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateGlobalTableInput,
    OutputTypesUnion,
    CreateGlobalTableOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateGlobalTableInput,
        CreateGlobalTableOutput,
        Blob
    >();

    constructor(readonly input: CreateGlobalTableInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateGlobalTableInput, CreateGlobalTableOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateGlobalTable
        };

        return stack.resolve(
            handler<CreateGlobalTableInput, CreateGlobalTableOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}