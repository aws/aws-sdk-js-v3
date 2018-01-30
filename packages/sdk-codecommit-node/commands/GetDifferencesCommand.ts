import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetDifferences} from '../model/GetDifferences';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetDifferencesInput} from '../types/GetDifferencesInput';
import {GetDifferencesOutput} from '../types/GetDifferencesOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetDifferencesCommand implements __aws_types.Command<
    InputTypesUnion,
    GetDifferencesInput,
    OutputTypesUnion,
    GetDifferencesOutput,
    CodeCommitResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetDifferencesInput,
        GetDifferencesOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetDifferencesInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetDifferencesInput, GetDifferencesOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetDifferences
        };

        return stack.resolve(
            handler<GetDifferencesInput, GetDifferencesOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}