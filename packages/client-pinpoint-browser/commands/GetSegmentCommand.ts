import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetSegment} from '../model/GetSegment';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetSegmentInput} from '../types/GetSegmentInput';
import {GetSegmentOutput} from '../types/GetSegmentOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class GetSegmentCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetSegmentInput,
    OutputTypesUnion,
    GetSegmentOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetSegmentInput,
        GetSegmentOutput,
        Blob
    >();

    constructor(readonly input: GetSegmentInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<GetSegmentInput, GetSegmentOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetSegment
        };

        return stack.resolve(
            handler<GetSegmentInput, GetSegmentOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}