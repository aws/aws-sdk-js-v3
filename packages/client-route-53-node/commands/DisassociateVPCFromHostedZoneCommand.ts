import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {DisassociateVPCFromHostedZone} from '../model/DisassociateVPCFromHostedZone';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {DisassociateVPCFromHostedZoneInput} from '../types/DisassociateVPCFromHostedZoneInput';
import {DisassociateVPCFromHostedZoneOutput} from '../types/DisassociateVPCFromHostedZoneOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class DisassociateVPCFromHostedZoneCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    DisassociateVPCFromHostedZoneInput,
    OutputTypesUnion,
    DisassociateVPCFromHostedZoneOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        DisassociateVPCFromHostedZoneInput,
        DisassociateVPCFromHostedZoneOutput,
        _stream.Readable
    >();

    constructor(readonly input: DisassociateVPCFromHostedZoneInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<DisassociateVPCFromHostedZoneInput, DisassociateVPCFromHostedZoneOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: DisassociateVPCFromHostedZone
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
            handler<DisassociateVPCFromHostedZoneInput, DisassociateVPCFromHostedZoneOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}