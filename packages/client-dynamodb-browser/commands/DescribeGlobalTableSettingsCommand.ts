import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DescribeGlobalTableSettings} from '../model/DescribeGlobalTableSettings';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeGlobalTableSettingsInput} from '../types/DescribeGlobalTableSettingsInput';
import {DescribeGlobalTableSettingsOutput} from '../types/DescribeGlobalTableSettingsOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';
export * from '../types/DescribeGlobalTableSettingsInput';
export * from '../types/DescribeGlobalTableSettingsOutput';
export * from '../types/DescribeGlobalTableSettingsExceptionsUnion';

export class DescribeGlobalTableSettingsCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeGlobalTableSettingsInput,
    OutputTypesUnion,
    DescribeGlobalTableSettingsOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeGlobalTableSettingsInput,
        DescribeGlobalTableSettingsOutput,
        Blob
    >();

    constructor(readonly input: DescribeGlobalTableSettingsInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<DescribeGlobalTableSettingsInput, DescribeGlobalTableSettingsOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeGlobalTableSettings
        };

        return stack.resolve(
            handler<DescribeGlobalTableSettingsInput, DescribeGlobalTableSettingsOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}