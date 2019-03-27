import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {RevokeGrant} from '../model/RevokeGrant';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {RevokeGrantInput} from '../types/RevokeGrantInput';
import {RevokeGrantOutput} from '../types/RevokeGrantOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/RevokeGrantInput';
export * from '../types/RevokeGrantOutput';
export * from '../types/RevokeGrantExceptionsUnion';

export class RevokeGrantCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    RevokeGrantInput,
    OutputTypesUnion,
    RevokeGrantOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        RevokeGrantInput,
        RevokeGrantOutput,
        _stream.Readable
    >();

    constructor(readonly input: RevokeGrantInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<RevokeGrantInput, RevokeGrantOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: RevokeGrant
        };

        return stack.resolve(
            handler<RevokeGrantInput, RevokeGrantOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}