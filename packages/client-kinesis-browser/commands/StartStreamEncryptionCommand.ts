import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {StartStreamEncryption} from '../model/StartStreamEncryption';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {StartStreamEncryptionInput} from '../types/StartStreamEncryptionInput';
import {StartStreamEncryptionOutput} from '../types/StartStreamEncryptionOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';

export class StartStreamEncryptionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    StartStreamEncryptionInput,
    OutputTypesUnion,
    StartStreamEncryptionOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        StartStreamEncryptionInput,
        StartStreamEncryptionOutput,
        Blob
    >();

    constructor(readonly input: StartStreamEncryptionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<StartStreamEncryptionInput, StartStreamEncryptionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: StartStreamEncryption
        };

        return stack.resolve(
            handler<StartStreamEncryptionInput, StartStreamEncryptionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}