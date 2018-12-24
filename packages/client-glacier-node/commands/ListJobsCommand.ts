import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListJobs} from '../model/ListJobs';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListJobsInput} from '../types/ListJobsInput';
import {ListJobsOutput} from '../types/ListJobsOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListJobsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListJobsInput,
    OutputTypesUnion,
    ListJobsOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListJobsInput,
        ListJobsOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListJobsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<ListJobsInput, ListJobsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListJobs
        };

        return stack.resolve(
            handler<ListJobsInput, ListJobsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}