import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {InitiateVaultLock} from '../model/InitiateVaultLock';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {InitiateVaultLockInput} from '../types/InitiateVaultLockInput';
import {InitiateVaultLockOutput} from '../types/InitiateVaultLockOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class InitiateVaultLockCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    InitiateVaultLockInput,
    OutputTypesUnion,
    InitiateVaultLockOutput,
    GlacierResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        InitiateVaultLockInput,
        InitiateVaultLockOutput,
        Blob
    >();

    constructor(readonly input: InitiateVaultLockInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<InitiateVaultLockInput, InitiateVaultLockOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: InitiateVaultLock
        };

        return stack.resolve(
            handler<InitiateVaultLockInput, InitiateVaultLockOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}