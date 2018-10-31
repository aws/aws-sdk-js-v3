import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {GetTrafficPolicyInstance} from '../model/GetTrafficPolicyInstance';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {GetTrafficPolicyInstanceInput} from '../types/GetTrafficPolicyInstanceInput';
import {GetTrafficPolicyInstanceOutput} from '../types/GetTrafficPolicyInstanceOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class GetTrafficPolicyInstanceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    GetTrafficPolicyInstanceInput,
    OutputTypesUnion,
    GetTrafficPolicyInstanceOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        GetTrafficPolicyInstanceInput,
        GetTrafficPolicyInstanceOutput,
        _stream.Readable
    >();

    constructor(readonly input: GetTrafficPolicyInstanceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<GetTrafficPolicyInstanceInput, GetTrafficPolicyInstanceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: GetTrafficPolicyInstance
        };
        stack.add(
            __aws_sdk_route53_id_normalizer_middleware.idNormalizerMiddleware,
            {
                step: 'initialize',
                priority: 0,
                tags: {NORMALIZE_ROUTE53_IDS: true}
            }
        );
        return stack.resolve(
            handler<GetTrafficPolicyInstanceInput, GetTrafficPolicyInstanceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}