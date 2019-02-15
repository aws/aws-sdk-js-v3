import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DescribeBackup} from '../model/DescribeBackup';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DescribeBackupInput} from '../types/DescribeBackupInput';
import {DescribeBackupOutput} from '../types/DescribeBackupOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';
export * from '../types/DescribeBackupInput';
export * from '../types/DescribeBackupOutput';
export * from '../types/DescribeBackupExceptionsUnion';

export class DescribeBackupCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DescribeBackupInput,
    OutputTypesUnion,
    DescribeBackupOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DescribeBackupInput,
        DescribeBackupOutput,
        _stream.Readable
    >();

    constructor(readonly input: DescribeBackupInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
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