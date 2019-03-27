import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateGrant} from '../model/CreateGrant';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateGrantInput} from '../types/CreateGrantInput';
import {CreateGrantOutput} from '../types/CreateGrantOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/CreateGrantInput';
export * from '../types/CreateGrantOutput';
export * from '../types/CreateGrantExceptionsUnion';

export class CreateGrantCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateGrantInput,
    OutputTypesUnion,
    CreateGrantOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateGrantInput,
        CreateGrantOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateGrantInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateGrantInput, CreateGrantOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateGrant
        };

        return stack.resolve(
            handler<CreateGrantInput, CreateGrantOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}