import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {PutRepositoryTriggers} from '../model/PutRepositoryTriggers';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutRepositoryTriggersInput} from '../types/PutRepositoryTriggersInput';
import {PutRepositoryTriggersOutput} from '../types/PutRepositoryTriggersOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class PutRepositoryTriggersCommand implements __aws_types.Command<
    InputTypesUnion,
    PutRepositoryTriggersInput,
    OutputTypesUnion,
    PutRepositoryTriggersOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<PutRepositoryTriggersInput, PutRepositoryTriggersOutput, _stream.Readable>();

    constructor(readonly input: PutRepositoryTriggersInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<PutRepositoryTriggersInput, PutRepositoryTriggersOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutRepositoryTriggers
        };

        return stack.resolve(
            handler<PutRepositoryTriggersInput, PutRepositoryTriggersOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}