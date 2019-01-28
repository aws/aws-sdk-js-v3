import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {UpdateEndpointsBatch} from '../model/UpdateEndpointsBatch';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateEndpointsBatchInput} from '../types/UpdateEndpointsBatchInput';
import {UpdateEndpointsBatchOutput} from '../types/UpdateEndpointsBatchOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class UpdateEndpointsBatchCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateEndpointsBatchInput,
    OutputTypesUnion,
    UpdateEndpointsBatchOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateEndpointsBatchInput,
        UpdateEndpointsBatchOutput,
        Blob
    >();

    constructor(readonly input: UpdateEndpointsBatchInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateEndpointsBatchInput, UpdateEndpointsBatchOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateEndpointsBatch
        };

        return stack.resolve(
            handler<UpdateEndpointsBatchInput, UpdateEndpointsBatchOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}