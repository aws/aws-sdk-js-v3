import * as __aws_middleware_stack from '@aws/middleware-stack';
import * as __aws_types from '@aws/types';
import {GetDataRetrievalPolicy} from '../model/GetDataRetrievalPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetDataRetrievalPolicyInput} from '../types/GetDataRetrievalPolicyInput';
import {GetDataRetrievalPolicyOutput} from '../types/GetDataRetrievalPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class GetDataRetrievalPolicyCommand implements __aws_types.Command<
    InputTypesUnion,
    GetDataRetrievalPolicyInput,
    OutputTypesUnion,
    GetDataRetrievalPolicyOutput,
    GlacierResolvedConfiguration,
    ReadableStream
> {
    readonly middlewareStack = new __aws_middleware_stack.MiddlewareStack<GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput, ReadableStream>();

    constructor(readonly input: GetDataRetrievalPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, ReadableStream>,
        configuration: GlacierResolvedConfiguration
    ): __aws_types.Handler<GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetDataRetrievalPolicy
        };

        return stack.resolve(
            handler<GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput>(handlerExecutionContext), 
            handlerExecutionContext
        );
    }
}