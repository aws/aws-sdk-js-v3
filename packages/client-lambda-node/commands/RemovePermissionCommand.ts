import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {RemovePermission} from '../model/RemovePermission';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {RemovePermissionInput} from '../types/RemovePermissionInput';
import {RemovePermissionOutput} from '../types/RemovePermissionOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';
export * from '../types/RemovePermissionInput';
export * from '../types/RemovePermissionOutput';
export * from '../types/RemovePermissionExceptionsUnion';

export class RemovePermissionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    RemovePermissionInput,
    OutputTypesUnion,
    RemovePermissionOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        RemovePermissionInput,
        RemovePermissionOutput,
        _stream.Readable
    >();

    constructor(readonly input: RemovePermissionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<RemovePermissionInput, RemovePermissionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: RemovePermission
        };

        return stack.resolve(
            handler<RemovePermissionInput, RemovePermissionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}