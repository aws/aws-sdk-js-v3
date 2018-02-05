import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {CompleteVaultLock} from '../model/CompleteVaultLock';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CompleteVaultLockInput} from '../types/CompleteVaultLockInput';
import {CompleteVaultLockOutput} from '../types/CompleteVaultLockOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class CompleteVaultLockCommand implements __aws_types.Command<
    InputTypesUnion,
    CompleteVaultLockInput,
    OutputTypesUnion,
    CompleteVaultLockOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        CompleteVaultLockInput,
        CompleteVaultLockOutput,
        ReadableStream
    >();

    constructor(readonly input: CompleteVaultLockInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<CompleteVaultLockInput, CompleteVaultLockOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CompleteVaultLock
        };

        return stack.resolve(
            handler<CompleteVaultLockInput, CompleteVaultLockOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}