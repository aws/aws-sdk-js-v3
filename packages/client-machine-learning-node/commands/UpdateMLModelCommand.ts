import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdateMLModel} from '../model/UpdateMLModel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateMLModelInput} from '../types/UpdateMLModelInput';
import {UpdateMLModelOutput} from '../types/UpdateMLModelOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class UpdateMLModelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateMLModelInput,
    OutputTypesUnion,
    UpdateMLModelOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateMLModelInput,
        UpdateMLModelOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateMLModelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateMLModelInput, UpdateMLModelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateMLModel
        };

        return stack.resolve(
            handler<UpdateMLModelInput, UpdateMLModelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}