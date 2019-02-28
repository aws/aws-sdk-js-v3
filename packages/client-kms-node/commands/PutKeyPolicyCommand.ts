import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {PutKeyPolicy} from '../model/PutKeyPolicy';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {PutKeyPolicyInput} from '../types/PutKeyPolicyInput';
import {PutKeyPolicyOutput} from '../types/PutKeyPolicyOutput';
import {KMSResolvedConfiguration} from '../KMSConfiguration';
export * from '../types/PutKeyPolicyInput';
export * from '../types/PutKeyPolicyOutput';
export * from '../types/PutKeyPolicyExceptionsUnion';

export class PutKeyPolicyCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    PutKeyPolicyInput,
    OutputTypesUnion,
    PutKeyPolicyOutput,
    KMSResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        PutKeyPolicyInput,
        PutKeyPolicyOutput,
        _stream.Readable
    >();

    constructor(readonly input: PutKeyPolicyInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: KMSResolvedConfiguration
    ): __aws_sdk_types.Handler<PutKeyPolicyInput, PutKeyPolicyOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: PutKeyPolicy
        };

        return stack.resolve(
            handler<PutKeyPolicyInput, PutKeyPolicyOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}