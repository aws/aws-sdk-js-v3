import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetReusableDelegationSet } from "../model/operations/GetReusableDelegationSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetReusableDelegationSetInput } from "../types/GetReusableDelegationSetInput";
import { GetReusableDelegationSetOutput } from "../types/GetReusableDelegationSetOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetReusableDelegationSetInput";
export * from "../types/GetReusableDelegationSetOutput";
export * from "../types/GetReusableDelegationSetExceptionsUnion";

export class GetReusableDelegationSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetReusableDelegationSetInput,
      OutputTypesUnion,
      GetReusableDelegationSetOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = GetReusableDelegationSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetReusableDelegationSetInput,
    GetReusableDelegationSetOutput,
    Blob
  >();

  constructor(readonly input: GetReusableDelegationSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetReusableDelegationSetInput,
    GetReusableDelegationSetOutput
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
      handler<GetReusableDelegationSetInput, GetReusableDelegationSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
