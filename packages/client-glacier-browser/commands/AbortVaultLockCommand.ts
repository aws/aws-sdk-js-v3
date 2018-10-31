import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {AbortVaultLock} from '../model/AbortVaultLock';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {AbortVaultLockInput} from '../types/AbortVaultLockInput';
import {AbortVaultLockOutput} from '../types/AbortVaultLockOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class AbortVaultLockCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    AbortVaultLockInput,
    OutputTypesUnion,
    AbortVaultLockOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        AbortVaultLockInput,
        AbortVaultLockOutput,
        Blob
    >();

    constructor(readonly input: AbortVaultLockInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<AbortVaultLockInput, AbortVaultLockOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: AbortVaultLock
        };

        return stack.resolve(
            handler<AbortVaultLockInput, AbortVaultLockOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}