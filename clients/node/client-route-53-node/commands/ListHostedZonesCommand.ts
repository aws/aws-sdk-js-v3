import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListHostedZones } from "../model/operations/ListHostedZones";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHostedZonesInput } from "../types/ListHostedZonesInput";
import { ListHostedZonesOutput } from "../types/ListHostedZonesOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListHostedZonesInput";
export * from "../types/ListHostedZonesOutput";
export * from "../types/ListHostedZonesExceptionsUnion";

export class ListHostedZonesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHostedZonesInput,
      OutputTypesUnion,
      ListHostedZonesOutput,
      Route53ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListHostedZones;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHostedZonesInput,
    ListHostedZonesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListHostedZonesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<ListHostedZonesInput, ListHostedZonesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };
    stack.add(
      __aws_sdk_route53_id_normalizer_middleware.idNormalizerMiddleware,
      {
        step: "initialize",
        priority: 0,
        tags: { NORMALIZE_ROUTE53_IDS: true }
      }
    );
    return stack.resolve(
      handler<ListHostedZonesInput, ListHostedZonesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
