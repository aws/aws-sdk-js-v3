import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import * as _stream from 'stream';
import {GetJobOutput} from '../model/GetJobOutput';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetJobOutputInput} from '../types/GetJobOutputInput';
import {GetJobOutputOutput} from '../types/GetJobOutputOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class GetJobOutputCommand implements __aws_types.Command<
    InputTypesUnion,
    GetJobOutputInput,
    OutputTypesUnion,
    GetJobOutputOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<
        GetJobOutputInput,
        GetJobOutputOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetJobOutputInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<GetJobOutputInput, GetJobOutputOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetJobOutput
        };

        return stack.resolve(
            handler<GetJobOutputInput, GetJobOutputOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}