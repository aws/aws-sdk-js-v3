import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {CreateStream} from '../model/CreateStream';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateStreamInput} from '../types/CreateStreamInput';
import {CreateStreamOutput} from '../types/CreateStreamOutput';
import {KinesisResolvedConfiguration} from '../KinesisConfiguration';

export class CreateStreamCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateStreamInput,
    OutputTypesUnion,
    CreateStreamOutput,
    KinesisResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateStreamInput,
        CreateStreamOutput,
        Blob
    >();

    constructor(readonly input: CreateStreamInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: KinesisResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateStreamInput, CreateStreamOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateStream
        };

        return stack.resolve(
            handler<CreateStreamInput, CreateStreamOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}