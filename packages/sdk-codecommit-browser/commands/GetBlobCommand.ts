import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetBlob} from '../model/GetBlob';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetBlobInput} from '../types/GetBlobInput';
import {GetBlobOutput} from '../types/GetBlobOutput';
import {CodeCommitResolvedConfiguration} from '../CodeCommitConfiguration';

export class GetBlobCommand implements __aws_types.Command<
    InputTypesUnion,
    GetBlobInput,
    OutputTypesUnion,
    GetBlobOutput,
    CodeCommitResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetBlobInput, GetBlobOutput, ReadableStream>();

    constructor(readonly input: GetBlobInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: CodeCommitResolvedConfiguration
    ): __aws_types.Handler<GetBlobInput, GetBlobOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetBlob
        };

        return stack.resolve(
            handler<GetBlobInput, GetBlobOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}