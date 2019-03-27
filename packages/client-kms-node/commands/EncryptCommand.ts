import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {Encrypt} from '../model/Encrypt';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {EncryptInput} from '../types/EncryptInput';
import {EncryptOutput} from '../types/EncryptOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/EncryptInput';
export * from '../types/EncryptOutput';
export * from '../types/EncryptExceptionsUnion';

export class EncryptCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    EncryptInput,
    OutputTypesUnion,
    EncryptOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        EncryptInput,
        EncryptOutput,
        _stream.Readable
    >();

    constructor(readonly input: EncryptInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<EncryptInput, EncryptOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: Encrypt
        };

        return stack.resolve(
            handler<EncryptInput, EncryptOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}