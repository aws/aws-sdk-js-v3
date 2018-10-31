import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateDataSourceFromS3} from '../model/CreateDataSourceFromS3';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateDataSourceFromS3Input} from '../types/CreateDataSourceFromS3Input';
import {CreateDataSourceFromS3Output} from '../types/CreateDataSourceFromS3Output';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateDataSourceFromS3Command implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateDataSourceFromS3Input,
    OutputTypesUnion,
    CreateDataSourceFromS3Output,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateDataSourceFromS3Input,
        CreateDataSourceFromS3Output,
        _stream.Readable
    >();

    constructor(readonly input: CreateDataSourceFromS3Input) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateDataSourceFromS3Input, CreateDataSourceFromS3Output> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateDataSourceFromS3
        };

        return stack.resolve(
            handler<CreateDataSourceFromS3Input, CreateDataSourceFromS3Output>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}