import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateVPCWithHostedZone } from "../model/AssociateVPCWithHostedZone";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateVPCWithHostedZoneInput } from "../types/AssociateVPCWithHostedZoneInput";
import { AssociateVPCWithHostedZoneOutput } from "../types/AssociateVPCWithHostedZoneOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/AssociateVPCWithHostedZoneInput";
export * from "../types/AssociateVPCWithHostedZoneOutput";
export * from "../types/AssociateVPCWithHostedZoneExceptionsUnion";

export class AssociateVPCWithHostedZoneCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateVPCWithHostedZoneInput,
      OutputTypesUnion,
      AssociateVPCWithHostedZoneOutput,
      Route53ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateVPCWithHostedZone;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateVPCWithHostedZoneInput,
    AssociateVPCWithHostedZoneOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateVPCWithHostedZoneInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateVPCWithHostedZoneInput,
    AssociateVPCWithHostedZoneOutput
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
        AssociateVPCWithHostedZoneInput,
        AssociateVPCWithHostedZoneOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
