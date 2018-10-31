import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DeleteMLModel} from '../model/DeleteMLModel';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DeleteMLModelInput} from '../types/DeleteMLModelInput';
import {DeleteMLModelOutput} from '../types/DeleteMLModelOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class DeleteMLModelCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DeleteMLModelInput,
    OutputTypesUnion,
    DeleteMLModelOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DeleteMLModelInput,
        DeleteMLModelOutput,
        _stream.Readable
    >();

    constructor(readonly input: DeleteMLModelInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<DeleteMLModelInput, DeleteMLModelOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DeleteMLModel
        };

        return stack.resolve(
            handler<DeleteMLModelInput, DeleteMLModelOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}