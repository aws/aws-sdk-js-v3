import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {PurchaseProvisionedCapacity} from '../model/PurchaseProvisionedCapacity';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PurchaseProvisionedCapacityInput} from '../types/PurchaseProvisionedCapacityInput';
import {PurchaseProvisionedCapacityOutput} from '../types/PurchaseProvisionedCapacityOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class PurchaseProvisionedCapacityCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PurchaseProvisionedCapacityInput,
    OutputTypesUnion,
    PurchaseProvisionedCapacityOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PurchaseProvisionedCapacityInput,
        PurchaseProvisionedCapacityOutput,
        _stream.Readable
    >();

    constructor(readonly input: PurchaseProvisionedCapacityInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<PurchaseProvisionedCapacityInput, PurchaseProvisionedCapacityOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PurchaseProvisionedCapacity
        };

        return stack.resolve(
            handler<PurchaseProvisionedCapacityInput, PurchaseProvisionedCapacityOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}