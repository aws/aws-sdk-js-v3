import * as __aws_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_types from '@aws-sdk/types';
import {DeleteIdentities} from '../model/DeleteIdentities';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteIdentitiesInput} from '../types/DeleteIdentitiesInput';
import {DeleteIdentitiesOutput} from '../types/DeleteIdentitiesOutput';
import {CognitoIdentityResolvedConfiguration} from '../CognitoIdentityConfiguration';

export class DeleteIdentitiesCommand implements __aws_types.Command<
    InputTypesUnion,
    DeleteIdentitiesInput,
    OutputTypesUnion,
    DeleteIdentitiesOutput,
    CognitoIdentityResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        DeleteIdentitiesInput,
        DeleteIdentitiesOutput,
        Blob
    >();

    constructor(readonly input: DeleteIdentitiesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CognitoIdentityResolvedConfiguration
    ): __aws_types.Handler<DeleteIdentitiesInput, DeleteIdentitiesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteIdentities
        };

        return stack.resolve(
            handler<DeleteIdentitiesInput, DeleteIdentitiesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}