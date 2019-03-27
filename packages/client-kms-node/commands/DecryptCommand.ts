import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {Decrypt} from '../model/Decrypt';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DecryptInput} from '../types/DecryptInput';
import {DecryptOutput} from '../types/DecryptOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/DecryptInput';
export * from '../types/DecryptOutput';
export * from '../types/DecryptExceptionsUnion';

export class DecryptCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DecryptInput,
    OutputTypesUnion,
    DecryptOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DecryptInput,
        DecryptOutput,
        _stream.Readable
    >();

    constructor(readonly input: DecryptInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<DecryptInput, DecryptOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: Decrypt
        };

        return stack.resolve(
            handler<DecryptInput, DecryptOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}