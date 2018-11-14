import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateBackup} from '../model/CreateBackup';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateBackupInput} from '../types/CreateBackupInput';
import {CreateBackupOutput} from '../types/CreateBackupOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';

export class CreateBackupCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateBackupInput,
    OutputTypesUnion,
    CreateBackupOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateBackupInput,
        CreateBackupOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateBackupInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateBackupInput, CreateBackupOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateBackup
        };

        return stack.resolve(
            handler<CreateBackupInput, CreateBackupOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}