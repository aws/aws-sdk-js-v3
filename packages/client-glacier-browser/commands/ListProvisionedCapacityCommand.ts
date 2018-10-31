import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {ListProvisionedCapacity} from '../model/ListProvisionedCapacity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListProvisionedCapacityInput} from '../types/ListProvisionedCapacityInput';
import {ListProvisionedCapacityOutput} from '../types/ListProvisionedCapacityOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class ListProvisionedCapacityCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListProvisionedCapacityInput,
    OutputTypesUnion,
    ListProvisionedCapacityOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListProvisionedCapacityInput,
        ListProvisionedCapacityOutput,
        Blob
    >();

    constructor(readonly input: ListProvisionedCapacityInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<ListProvisionedCapacityInput, ListProvisionedCapacityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListProvisionedCapacity
        };

        return stack.resolve(
            handler<ListProvisionedCapacityInput, ListProvisionedCapacityOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}