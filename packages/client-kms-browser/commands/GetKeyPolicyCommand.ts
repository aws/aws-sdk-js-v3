import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GetKeyPolicy} from '../model/GetKeyPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetKeyPolicyInput} from '../types/GetKeyPolicyInput';
import {GetKeyPolicyOutput} from '../types/GetKeyPolicyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/GetKeyPolicyInput';
export * from '../types/GetKeyPolicyOutput';
export * from '../types/GetKeyPolicyExceptionsUnion';

export class GetKeyPolicyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetKeyPolicyInput,
    OutputTypesUnion,
    GetKeyPolicyOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetKeyPolicyInput,
        GetKeyPolicyOutput,
        Blob
    >();

    constructor(readonly input: GetKeyPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<GetKeyPolicyInput, GetKeyPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetKeyPolicy
        };

        return stack.resolve(
            handler<GetKeyPolicyInput, GetKeyPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}