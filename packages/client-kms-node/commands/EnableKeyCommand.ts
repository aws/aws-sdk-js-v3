import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {EnableKey} from '../model/EnableKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {EnableKeyInput} from '../types/EnableKeyInput';
import {EnableKeyOutput} from '../types/EnableKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/EnableKeyInput';
export * from '../types/EnableKeyOutput';
export * from '../types/EnableKeyExceptionsUnion';

export class EnableKeyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    EnableKeyInput,
    OutputTypesUnion,
    EnableKeyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        EnableKeyInput,
        EnableKeyOutput,
        _stream.Readable
    >();

    constructor(readonly input: EnableKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<EnableKeyInput, EnableKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: EnableKey
        };

        return stack.resolve(
            handler<EnableKeyInput, EnableKeyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}