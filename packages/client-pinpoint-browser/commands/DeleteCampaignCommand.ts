import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DeleteCampaign} from '../model/DeleteCampaign';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteCampaignInput} from '../types/DeleteCampaignInput';
import {DeleteCampaignOutput} from '../types/DeleteCampaignOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';
export * from '../types/DeleteCampaignInput';
export * from '../types/DeleteCampaignOutput';
export * from '../types/DeleteCampaignExceptionsUnion';

export class DeleteCampaignCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteCampaignInput,
    OutputTypesUnion,
    DeleteCampaignOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteCampaignInput,
        DeleteCampaignOutput,
        Blob
    >();

    constructor(readonly input: DeleteCampaignInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteCampaignInput, DeleteCampaignOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteCampaign
        };

        return stack.resolve(
            handler<DeleteCampaignInput, DeleteCampaignOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}