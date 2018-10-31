import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetDataSource} from '../model/GetDataSource';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetDataSourceInput} from '../types/GetDataSourceInput';
import {GetDataSourceOutput} from '../types/GetDataSourceOutput';
import {MachineLearningResolvedConfiguration} from '../MachineLearningConfiguration';

export class GetDataSourceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetDataSourceInput,
    OutputTypesUnion,
    GetDataSourceOutput,
    MachineLearningResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetDataSourceInput,
        GetDataSourceOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetDataSourceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: MachineLearningResolvedConfiguration
    ): __aws_sdk_types.Handler<GetDataSourceInput, GetDataSourceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetDataSource
        };

        return stack.resolve(
            handler<GetDataSourceInput, GetDataSourceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}