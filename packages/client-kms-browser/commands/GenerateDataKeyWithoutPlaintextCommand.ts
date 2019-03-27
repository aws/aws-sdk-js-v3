import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {GenerateDataKeyWithoutPlaintext} from '../model/GenerateDataKeyWithoutPlaintext';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GenerateDataKeyWithoutPlaintextInput} from '../types/GenerateDataKeyWithoutPlaintextInput';
import {GenerateDataKeyWithoutPlaintextOutput} from '../types/GenerateDataKeyWithoutPlaintextOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/GenerateDataKeyWithoutPlaintextInput';
export * from '../types/GenerateDataKeyWithoutPlaintextOutput';
export * from '../types/GenerateDataKeyWithoutPlaintextExceptionsUnion';

export class GenerateDataKeyWithoutPlaintextCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GenerateDataKeyWithoutPlaintextInput,
    OutputTypesUnion,
    GenerateDataKeyWithoutPlaintextOutput,
    KMSResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GenerateDataKeyWithoutPlaintextInput,
        GenerateDataKeyWithoutPlaintextOutput,
        Blob
    >();

    constructor(readonly input: GenerateDataKeyWithoutPlaintextInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<GenerateDataKeyWithoutPlaintextInput, GenerateDataKeyWithoutPlaintextOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GenerateDataKeyWithoutPlaintext
        };

        return stack.resolve(
            handler<GenerateDataKeyWithoutPlaintextInput, GenerateDataKeyWithoutPlaintextOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}