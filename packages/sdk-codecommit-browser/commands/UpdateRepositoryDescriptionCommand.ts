import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {UpdateRepositoryDescription} from '../model/UpdateRepositoryDescription';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateRepositoryDescriptionInput} from '../types/UpdateRepositoryDescriptionInput';
import {UpdateRepositoryDescriptionOutput} from '../types/UpdateRepositoryDescriptionOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class UpdateRepositoryDescriptionCommand implements __aws_types.Command<
    InputTypesUnion,
    UpdateRepositoryDescriptionInput,
    OutputTypesUnion,
    UpdateRepositoryDescriptionOutput,
    CodeCommitResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        UpdateRepositoryDescriptionInput,
        UpdateRepositoryDescriptionOutput,
        Blob
    >();

    constructor(readonly input: UpdateRepositoryDescriptionInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<UpdateRepositoryDescriptionInput, UpdateRepositoryDescriptionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateRepositoryDescription
        };

        return stack.resolve(
            handler<UpdateRepositoryDescriptionInput, UpdateRepositoryDescriptionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}