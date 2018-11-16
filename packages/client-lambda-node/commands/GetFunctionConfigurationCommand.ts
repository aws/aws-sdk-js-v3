import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetFunctionConfiguration} from '../model/GetFunctionConfiguration';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetFunctionConfigurationInput} from '../types/GetFunctionConfigurationInput';
import {GetFunctionConfigurationOutput} from '../types/GetFunctionConfigurationOutput';
import {LambdaResolvedConfiguration} from '../LambdaConfiguration';

export class GetFunctionConfigurationCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetFunctionConfigurationInput,
    OutputTypesUnion,
    GetFunctionConfigurationOutput,
    LambdaResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetFunctionConfigurationInput,
        GetFunctionConfigurationOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetFunctionConfigurationInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: LambdaResolvedConfiguration
    ): __aws_sdk_types.Handler<GetFunctionConfigurationInput, GetFunctionConfigurationOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetFunctionConfiguration
        };

        return stack.resolve(
            handler<GetFunctionConfigurationInput, GetFunctionConfigurationOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}