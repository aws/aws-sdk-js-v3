import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetVaultLock} from '../model/GetVaultLock';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetVaultLockInput} from '../types/GetVaultLockInput';
import {GetVaultLockOutput} from '../types/GetVaultLockOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class GetVaultLockCommand implements __aws_types.Command<
    InputTypesUnion,
    GetVaultLockInput,
    OutputTypesUnion,
    GetVaultLockOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetVaultLockInput,
        GetVaultLockOutput,
        ReadableStream
    >();

    constructor(readonly input: GetVaultLockInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<GetVaultLockInput, GetVaultLockOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetVaultLock
        };

        return stack.resolve(
            handler<GetVaultLockInput, GetVaultLockOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}