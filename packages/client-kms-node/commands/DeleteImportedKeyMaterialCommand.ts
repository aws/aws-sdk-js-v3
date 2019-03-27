import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteImportedKeyMaterial} from '../model/DeleteImportedKeyMaterial';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteImportedKeyMaterialInput} from '../types/DeleteImportedKeyMaterialInput';
import {DeleteImportedKeyMaterialOutput} from '../types/DeleteImportedKeyMaterialOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/DeleteImportedKeyMaterialInput';
export * from '../types/DeleteImportedKeyMaterialOutput';
export * from '../types/DeleteImportedKeyMaterialExceptionsUnion';

export class DeleteImportedKeyMaterialCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteImportedKeyMaterialInput,
    OutputTypesUnion,
    DeleteImportedKeyMaterialOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteImportedKeyMaterialInput,
        DeleteImportedKeyMaterialOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteImportedKeyMaterialInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteImportedKeyMaterialInput, DeleteImportedKeyMaterialOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteImportedKeyMaterial
        };

        return stack.resolve(
            handler<DeleteImportedKeyMaterialInput, DeleteImportedKeyMaterialOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}