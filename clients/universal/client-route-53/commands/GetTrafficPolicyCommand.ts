import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTrafficPolicy } from "../model/GetTrafficPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTrafficPolicyInput } from "../types/GetTrafficPolicyInput";
import { GetTrafficPolicyOutput } from "../types/GetTrafficPolicyOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetTrafficPolicyInput";
export * from "../types/GetTrafficPolicyOutput";
export * from "../types/GetTrafficPolicyExceptionsUnion";

export class GetTrafficPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTrafficPolicyInput,
      OutputTypesUnion,
      GetTrafficPolicyOutput,
      Route53ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetTrafficPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTrafficPolicyInput,
    GetTrafficPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: GetTrafficPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTrafficPolicyInput, GetTrafficPolicyOutput> {
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
      handler<GetTrafficPolicyInput, GetTrafficPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
