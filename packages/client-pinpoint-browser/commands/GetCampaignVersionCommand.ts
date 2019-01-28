import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetCampaignVersion} from '../model/GetCampaignVersion';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetCampaignVersionInput} from '../types/GetCampaignVersionInput';
import {GetCampaignVersionOutput} from '../types/GetCampaignVersionOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class GetCampaignVersionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetCampaignVersionInput,
    OutputTypesUnion,
    GetCampaignVersionOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetCampaignVersionInput,
        GetCampaignVersionOutput,
        Blob
    >();

    constructor(readonly input: GetCampaignVersionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<GetCampaignVersionInput, GetCampaignVersionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetCampaignVersion
        };

        return stack.resolve(
            handler<GetCampaignVersionInput, GetCampaignVersionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}