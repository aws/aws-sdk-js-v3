import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {CreateVault} from '../model/CreateVault';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateVaultInput} from '../types/CreateVaultInput';
import {CreateVaultOutput} from '../types/CreateVaultOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class CreateVaultCommand implements __aws_types.Command<
    InputTypesUnion,
    CreateVaultInput,
    OutputTypesUnion,
    CreateVaultOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<CreateVaultInput, CreateVaultOutput, _stream.Readable>();

    constructor(readonly input: CreateVaultInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<CreateVaultInput, CreateVaultOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateVault
        };

        return stack.resolve(
            handler<CreateVaultInput, CreateVaultOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}