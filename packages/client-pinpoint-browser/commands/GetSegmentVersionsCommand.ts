import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetSegmentVersions} from '../model/GetSegmentVersions';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetSegmentVersionsInput} from '../types/GetSegmentVersionsInput';
import {GetSegmentVersionsOutput} from '../types/GetSegmentVersionsOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class GetSegmentVersionsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetSegmentVersionsInput,
    OutputTypesUnion,
    GetSegmentVersionsOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetSegmentVersionsInput,
        GetSegmentVersionsOutput,
        Blob
    >();

    constructor(readonly input: GetSegmentVersionsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<GetSegmentVersionsInput, GetSegmentVersionsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetSegmentVersions
        };

        return stack.resolve(
            handler<GetSegmentVersionsInput, GetSegmentVersionsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}