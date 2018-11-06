import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {ListHostedZonesByName} from '../model/ListHostedZonesByName';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {ListHostedZonesByNameInput} from '../types/ListHostedZonesByNameInput';
import {ListHostedZonesByNameOutput} from '../types/ListHostedZonesByNameOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class ListHostedZonesByNameCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    ListHostedZonesByNameInput,
    OutputTypesUnion,
    ListHostedZonesByNameOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        ListHostedZonesByNameInput,
        ListHostedZonesByNameOutput,
        _stream.Readable
    >();

    constructor(readonly input: ListHostedZonesByNameInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<ListHostedZonesByNameInput, ListHostedZonesByNameOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: ListHostedZonesByName
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
            handler<ListHostedZonesByNameInput, ListHostedZonesByNameOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}