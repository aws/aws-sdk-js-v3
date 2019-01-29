import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetExportJobs} from '../model/GetExportJobs';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetExportJobsInput} from '../types/GetExportJobsInput';
import {GetExportJobsOutput} from '../types/GetExportJobsOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';
export * from '../types/GetExportJobsInput';
export * from '../types/GetExportJobsOutput';
export * from '../types/GetExportJobsExceptionsUnion';

export class GetExportJobsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetExportJobsInput,
    OutputTypesUnion,
    GetExportJobsOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetExportJobsInput,
        GetExportJobsOutput,
        Blob
    >();

    constructor(readonly input: GetExportJobsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<GetExportJobsInput, GetExportJobsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetExportJobs
        };

        return stack.resolve(
            handler<GetExportJobsInput, GetExportJobsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}