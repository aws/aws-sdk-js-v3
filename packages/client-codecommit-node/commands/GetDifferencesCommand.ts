import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetDifferences} from '../model/GetDifferences';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetDifferencesInput} from '../types/GetDifferencesInput';
import {GetDifferencesOutput} from '../types/GetDifferencesOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';
export * from '../types/GetDifferencesInput';
export * from '../types/GetDifferencesOutput';
export * from '../types/GetDifferencesExceptionsUnion';

export class GetDifferencesCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetDifferencesInput,
    OutputTypesUnion,
    GetDifferencesOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetDifferencesInput,
        GetDifferencesOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetDifferencesInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_sdk_types.Handler<GetDifferencesInput, GetDifferencesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetDifferences
        };

        return stack.resolve(
            handler<GetDifferencesInput, GetDifferencesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}