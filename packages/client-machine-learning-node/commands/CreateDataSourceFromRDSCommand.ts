import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateDataSourceFromRDS} from '../model/CreateDataSourceFromRDS';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateDataSourceFromRDSInput} from '../types/CreateDataSourceFromRDSInput';
import {CreateDataSourceFromRDSOutput} from '../types/CreateDataSourceFromRDSOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class CreateDataSourceFromRDSCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateDataSourceFromRDSInput,
    OutputTypesUnion,
    CreateDataSourceFromRDSOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateDataSourceFromRDSInput,
        CreateDataSourceFromRDSOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateDataSourceFromRDSInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateDataSourceFromRDS
        };

        return stack.resolve(
            handler<CreateDataSourceFromRDSInput, CreateDataSourceFromRDSOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}