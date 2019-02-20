import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetVaultAccessPolicy} from '../model/GetVaultAccessPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetVaultAccessPolicyInput} from '../types/GetVaultAccessPolicyInput';
import {GetVaultAccessPolicyOutput} from '../types/GetVaultAccessPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';
export * from '../types/GetVaultAccessPolicyInput';
export * from '../types/GetVaultAccessPolicyOutput';
export * from '../types/GetVaultAccessPolicyExceptionsUnion';

export class GetVaultAccessPolicyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetVaultAccessPolicyInput,
    OutputTypesUnion,
    GetVaultAccessPolicyOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetVaultAccessPolicyInput,
        GetVaultAccessPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetVaultAccessPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<GetVaultAccessPolicyInput, GetVaultAccessPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetVaultAccessPolicy
        };

        return stack.resolve(
            handler<GetVaultAccessPolicyInput, GetVaultAccessPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}