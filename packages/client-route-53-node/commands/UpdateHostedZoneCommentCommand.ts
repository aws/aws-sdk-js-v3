import * as __aws_sdk_middleware_stack from '@aws-sdk/middleware-stack';
import * as __aws_sdk_route53_id_normalizer_middleware from '@aws-sdk/route53-id-normalizer-middleware';
import * as __aws_sdk_types from '@aws-sdk/types';
import * as _stream from 'stream';
import {UpdateHostedZoneComment} from '../model/UpdateHostedZoneComment';
import {InputTypesUnion} from '../types/InputTypesUnion';
import {OutputTypesUnion} from '../types/OutputTypesUnion';
import {UpdateHostedZoneCommentInput} from '../types/UpdateHostedZoneCommentInput';
import {UpdateHostedZoneCommentOutput} from '../types/UpdateHostedZoneCommentOutput';
import {Route53ResolvedConfiguration} from '../Route53Configuration';

export class UpdateHostedZoneCommentCommand implements __aws_sdk_types.Command<
    InputTypesUnion,
    UpdateHostedZoneCommentInput,
    OutputTypesUnion,
    UpdateHostedZoneCommentOutput,
    Route53ResolvedConfiguration,
    _stream.Readable
> {
    readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
        UpdateHostedZoneCommentInput,
        UpdateHostedZoneCommentOutput,
        _stream.Readable
    >();

    constructor(readonly input: UpdateHostedZoneCommentInput) {}

    resolveMiddleware(
        clientStack: __aws_sdk_middleware_stack.MiddlewareStack<InputTypesUnion, OutputTypesUnion, _stream.Readable>,
        configuration: Route53ResolvedConfiguration
    ): __aws_sdk_types.Handler<UpdateHostedZoneCommentInput, UpdateHostedZoneCommentOutput> {
        const {handler} = configuration;
        const stack = clientStack.concat(this.middlewareStack);

        const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
            logger: {} as any,
            model: UpdateHostedZoneComment
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
            handler<UpdateHostedZoneCommentInput, UpdateHostedZoneCommentOutput>(handlerExecutionContext),
            handlerExecutionContext
        );
    }
}