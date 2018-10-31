import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetTrafficPolicyInstanceCount} from '../model/GetTrafficPolicyInstanceCount';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetTrafficPolicyInstanceCountInput} from '../types/GetTrafficPolicyInstanceCountInput';
import {GetTrafficPolicyInstanceCountOutput} from '../types/GetTrafficPolicyInstanceCountOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetTrafficPolicyInstanceCountCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetTrafficPolicyInstanceCountInput,
    OutputTypesUnion,
    GetTrafficPolicyInstanceCountOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetTrafficPolicyInstanceCountInput,
        GetTrafficPolicyInstanceCountOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetTrafficPolicyInstanceCountInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<GetTrafficPolicyInstanceCountInput, GetTrafficPolicyInstanceCountOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetTrafficPolicyInstanceCount
        };

        return stack.resolve(
            handler<GetTrafficPolicyInstanceCountInput, GetTrafficPolicyInstanceCountOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}