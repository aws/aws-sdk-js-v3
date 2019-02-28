import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateKey} from '../model/CreateKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateKeyInput} from '../types/CreateKeyInput';
import {CreateKeyOutput} from '../types/CreateKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/CreateKeyInput';
export * from '../types/CreateKeyOutput';
export * from '../types/CreateKeyExceptionsUnion';

export class CreateKeyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateKeyInput,
    OutputTypesUnion,
    CreateKeyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateKeyInput,
        CreateKeyOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateKeyInput, CreateKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateKey
        };

        return stack.resolve(
            handler<CreateKeyInput, CreateKeyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}