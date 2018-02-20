import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {ListJobs} from '../model/ListJobs';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListJobsInput} from '../types/ListJobsInput';
import {ListJobsOutput} from '../types/ListJobsOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListJobsCommand implements __aws_types.Command<
    InputTypesUnion,
    ListJobsInput,
    OutputTypesUnion,
    ListJobsOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        ListJobsInput,
        ListJobsOutput,
        Blob
    >();

    constructor(readonly input: ListJobsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<ListJobsInput, ListJobsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListJobs
        };

        return stack.resolve(
            handler<ListJobsInput, ListJobsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}