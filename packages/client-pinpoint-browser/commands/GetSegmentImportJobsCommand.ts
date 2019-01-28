import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetSegmentImportJobs} from '../model/GetSegmentImportJobs';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetSegmentImportJobsInput} from '../types/GetSegmentImportJobsInput';
import {GetSegmentImportJobsOutput} from '../types/GetSegmentImportJobsOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';
export * from '../types/GetSegmentImportJobsInput';
export * from '../types/GetSegmentImportJobsOutput';
export * from '../types/GetSegmentImportJobsExceptionsUnion';

export class GetSegmentImportJobsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetSegmentImportJobsInput,
    OutputTypesUnion,
    GetSegmentImportJobsOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetSegmentImportJobsInput,
        GetSegmentImportJobsOutput,
        Blob
    >();

    constructor(readonly input: GetSegmentImportJobsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<GetSegmentImportJobsInput, GetSegmentImportJobsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetSegmentImportJobs
        };

        return stack.resolve(
            handler<GetSegmentImportJobsInput, GetSegmentImportJobsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}