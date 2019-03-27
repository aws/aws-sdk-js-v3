import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetKeyRotationStatus} from '../model/GetKeyRotationStatus';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetKeyRotationStatusInput} from '../types/GetKeyRotationStatusInput';
import {GetKeyRotationStatusOutput} from '../types/GetKeyRotationStatusOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/GetKeyRotationStatusInput';
export * from '../types/GetKeyRotationStatusOutput';
export * from '../types/GetKeyRotationStatusExceptionsUnion';

export class GetKeyRotationStatusCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetKeyRotationStatusInput,
    OutputTypesUnion,
    GetKeyRotationStatusOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetKeyRotationStatusInput,
        GetKeyRotationStatusOutput,
        Blob
    >();

    constructor(readonly input: GetKeyRotationStatusInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<GetKeyRotationStatusInput, GetKeyRotationStatusOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetKeyRotationStatus
        };

        return stack.resolve(
            handler<GetKeyRotationStatusInput, GetKeyRotationStatusOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}