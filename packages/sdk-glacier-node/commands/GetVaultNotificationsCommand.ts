import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetVaultNotifications} from '../model/GetVaultNotifications';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetVaultNotificationsInput} from '../types/GetVaultNotificationsInput';
import {GetVaultNotificationsOutput} from '../types/GetVaultNotificationsOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class GetVaultNotificationsCommand implements __aws_types.Command<
    InputTypesUnion,
    GetVaultNotificationsInput,
    OutputTypesUnion,
    GetVaultNotificationsOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetVaultNotificationsInput,
        GetVaultNotificationsOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetVaultNotificationsInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<GetVaultNotificationsInput, GetVaultNotificationsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetVaultNotifications
        };

        return stack.resolve(
            handler<GetVaultNotificationsInput, GetVaultNotificationsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}