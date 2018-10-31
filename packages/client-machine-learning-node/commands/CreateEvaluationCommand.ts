import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateEvaluation} from '../model/CreateEvaluation';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateEvaluationInput} from '../types/CreateEvaluationInput';
import {CreateEvaluationOutput} from '../types/CreateEvaluationOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateEvaluationCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateEvaluationInput,
    OutputTypesUnion,
    CreateEvaluationOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateEvaluationInput,
        CreateEvaluationOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateEvaluationInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateEvaluationInput, CreateEvaluationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateEvaluation
        };

        return stack.resolve(
            handler<CreateEvaluationInput, CreateEvaluationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}