import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetDataRetrievalPolicy} from '../model/GetDataRetrievalPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetDataRetrievalPolicyInput} from '../types/GetDataRetrievalPolicyInput';
import {GetDataRetrievalPolicyOutput} from '../types/GetDataRetrievalPolicyOutput';
import {GlacierResolvedConfiguration} from '../GlacierConfiguration';

export class GetDataRetrievalPolicyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetDataRetrievalPolicyInput,
    OutputTypesUnion,
    GetDataRetrievalPolicyOutput,
    GlacierResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetDataRetrievalPolicyInput,
        GetDataRetrievalPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetDataRetrievalPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: GlacierResolvedConfiguration
    ): __aws_sdk_types.Handler<GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetDataRetrievalPolicy
        };

        return stack.resolve(
            handler<GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}