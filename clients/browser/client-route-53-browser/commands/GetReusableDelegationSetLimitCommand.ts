import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetReusableDelegationSetLimit } from "../model/operations/GetReusableDelegationSetLimit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReusableDelegationSetLimitInput } from "../types/GetReusableDelegationSetLimitInput";
import { GetReusableDelegationSetLimitOutput } from "../types/GetReusableDelegationSetLimitOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetReusableDelegationSetLimitInput";
export * from "../types/GetReusableDelegationSetLimitOutput";
export * from "../types/GetReusableDelegationSetLimitExceptionsUnion";

export class GetReusableDelegationSetLimitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReusableDelegationSetLimitInput,
      OutputTypesUnion,
      GetReusableDelegationSetLimitOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = GetReusableDelegationSetLimit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReusableDelegationSetLimitInput,
    GetReusableDelegationSetLimitOutput,
    Blob
  >();

  constructor(readonly input: GetReusableDelegationSetLimitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReusableDelegationSetLimitInput,
    GetReusableDelegationSetLimitOutput
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
        GetReusableDelegationSetLimitInput,
        GetReusableDelegationSetLimitOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
