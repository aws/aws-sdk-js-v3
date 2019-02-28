import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GenerateDataKey} from '../model/GenerateDataKey';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GenerateDataKeyInput} from '../types/GenerateDataKeyInput';
import {GenerateDataKeyOutput} from '../types/GenerateDataKeyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/GenerateDataKeyInput';
export * from '../types/GenerateDataKeyOutput';
export * from '../types/GenerateDataKeyExceptionsUnion';

export class GenerateDataKeyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GenerateDataKeyInput,
    OutputTypesUnion,
    GenerateDataKeyOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GenerateDataKeyInput,
        GenerateDataKeyOutput,
        Blob
    >();

    constructor(readonly input: GenerateDataKeyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<GenerateDataKeyInput, GenerateDataKeyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GenerateDataKey
        };

        return stack.resolve(
            handler<GenerateDataKeyInput, GenerateDataKeyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}