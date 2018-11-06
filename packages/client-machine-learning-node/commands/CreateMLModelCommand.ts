import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateMLModel} from '../model/CreateMLModel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateMLModelInput} from '../types/CreateMLModelInput';
import {CreateMLModelOutput} from '../types/CreateMLModelOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateMLModelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateMLModelInput,
    OutputTypesUnion,
    CreateMLModelOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateMLModelInput,
        CreateMLModelOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateMLModelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateMLModelInput, CreateMLModelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateMLModel
        };

        return stack.resolve(
            handler<CreateMLModelInput, CreateMLModelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}