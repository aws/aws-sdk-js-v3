import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {CreateTrafficPolicyInstance} from '../model/CreateTrafficPolicyInstance';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {CreateTrafficPolicyInstanceInput} from '../types/CreateTrafficPolicyInstanceInput';
import {CreateTrafficPolicyInstanceOutput} from '../types/CreateTrafficPolicyInstanceOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class CreateTrafficPolicyInstanceCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    CreateTrafficPolicyInstanceInput,
    OutputTypesUnion,
    CreateTrafficPolicyInstanceOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        CreateTrafficPolicyInstanceInput,
        CreateTrafficPolicyInstanceOutput,
        _stream.Readable
    >();

    constructor(readonly input: CreateTrafficPolicyInstanceInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<CreateTrafficPolicyInstanceInput, CreateTrafficPolicyInstanceOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: CreateTrafficPolicyInstance
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
            handler<CreateTrafficPolicyInstanceInput, CreateTrafficPolicyInstanceOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}