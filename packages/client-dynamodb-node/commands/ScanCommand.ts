import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {Scan} from '../model/Scan';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ScanInput} from '../types/ScanInput';
import {ScanOutput} from '../types/ScanOutput';
import {DynamoDBResolvedConfiguration} from '../DynamoDBConfiguration';
export * from '../types/ScanInput';
export * from '../types/ScanOutput';
export * from '../types/ScanExceptionsUnion';

export class ScanCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ScanInput,
    OutputTypesUnion,
    ScanOutput,
    DynamoDBResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ScanInput,
        ScanOutput,
        _stream.Readable
    >();

    constructor(readonly input: ScanInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: DynamoDBResolvedConfiguration
    ): __aws_sdk_types.Handler<ScanInput, ScanOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: Scan
        };

        return stack.resolve(
            handler<ScanInput, ScanOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}