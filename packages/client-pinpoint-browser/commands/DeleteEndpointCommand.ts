import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DeleteEndpoint} from '../model/DeleteEndpoint';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteEndpointInput} from '../types/DeleteEndpointInput';
import {DeleteEndpointOutput} from '../types/DeleteEndpointOutput';
import {PinpointResolvedConfiguration} from '../PinpointConfiguration';

export class DeleteEndpointCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteEndpointInput,
    OutputTypesUnion,
    DeleteEndpointOutput,
    PinpointResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteEndpointInput,
        DeleteEndpointOutput,
        Blob
    >();

    constructor(readonly input: DeleteEndpointInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: PinpointResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteEndpointInput, DeleteEndpointOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteEndpoint
        };

        return stack.resolve(
            handler<DeleteEndpointInput, DeleteEndpointOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}