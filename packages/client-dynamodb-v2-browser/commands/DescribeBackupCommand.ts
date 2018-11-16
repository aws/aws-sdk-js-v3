import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import {DescribeBackup} from '../model/DescribeBackup';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeBackupInput} from '../types/DescribeBackupInput';
import {DescribeBackupOutput} from '../types/DescribeBackupOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class DescribeBackupCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeBackupInput,
    OutputTypesUnion,
    DescribeBackupOutput,
    DynamoDBResolvedConfiguration,
    Blob
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeBackupInput,
        DescribeBackupOutput,
        Blob
    >();

    constructor(readonly input: DescribeBackupInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, Blob>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<DescribeBackupInput, DescribeBackupOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DescribeBackup
        };

        return stack.resolve(
            handler<DescribeBackupInput, DescribeBackupOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}