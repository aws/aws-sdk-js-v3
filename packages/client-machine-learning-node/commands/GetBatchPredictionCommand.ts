import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetBatchPrediction} from '../model/GetBatchPrediction';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetBatchPredictionInput} from '../types/GetBatchPredictionInput';
import {GetBatchPredictionOutput} from '../types/GetBatchPredictionOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class GetBatchPredictionCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetBatchPredictionInput,
    OutputTypesUnion,
    GetBatchPredictionOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetBatchPredictionInput,
        GetBatchPredictionOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetBatchPredictionInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<GetBatchPredictionInput, GetBatchPredictionOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetBatchPrediction
        };

        return stack.resolve(
            handler<GetBatchPredictionInput, GetBatchPredictionOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}