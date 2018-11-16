import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {UpdateContinuousBackups} from '../model/UpdateContinuousBackups';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateContinuousBackupsInput} from '../types/UpdateContinuousBackupsInput';
import {UpdateContinuousBackupsOutput} from '../types/UpdateContinuousBackupsOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class UpdateContinuousBackupsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateContinuousBackupsInput,
    OutputTypesUnion,
    UpdateContinuousBackupsOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateContinuousBackupsInput,
        UpdateContinuousBackupsOutput,
        Blob
    >();

    constructor(readonly input: UpdateContinuousBackupsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateContinuousBackups
        };

        return stack.resolve(
            handler<UpdateContinuousBackupsInput, UpdateContinuousBackupsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}