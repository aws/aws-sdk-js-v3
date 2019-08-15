import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTrafficPolicyInstancesByHostedZone } from "../model/operations/ListTrafficPolicyInstancesByHostedZone";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTrafficPolicyInstancesByHostedZoneInput } from "../types/ListTrafficPolicyInstancesByHostedZoneInput";
import { ListTrafficPolicyInstancesByHostedZoneOutput } from "../types/ListTrafficPolicyInstancesByHostedZoneOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListTrafficPolicyInstancesByHostedZoneInput";
export * from "../types/ListTrafficPolicyInstancesByHostedZoneOutput";
export * from "../types/ListTrafficPolicyInstancesByHostedZoneExceptionsUnion";

export class ListTrafficPolicyInstancesByHostedZoneCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTrafficPolicyInstancesByHostedZoneInput,
      OutputTypesUnion,
      ListTrafficPolicyInstancesByHostedZoneOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = ListTrafficPolicyInstancesByHostedZone;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTrafficPolicyInstancesByHostedZoneInput,
    ListTrafficPolicyInstancesByHostedZoneOutput,
    Blob
  >();

  constructor(readonly input: ListTrafficPolicyInstancesByHostedZoneInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTrafficPolicyInstancesByHostedZoneInput,
    ListTrafficPolicyInstancesByHostedZoneOutput
  > {
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
      handler<
        ListTrafficPolicyInstancesByHostedZoneInput,
        ListTrafficPolicyInstancesByHostedZoneOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
