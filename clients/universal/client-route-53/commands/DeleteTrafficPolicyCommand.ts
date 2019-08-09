import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTrafficPolicy } from "../model/DeleteTrafficPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTrafficPolicyInput } from "../types/DeleteTrafficPolicyInput";
import { DeleteTrafficPolicyOutput } from "../types/DeleteTrafficPolicyOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/DeleteTrafficPolicyInput";
export * from "../types/DeleteTrafficPolicyOutput";
export * from "../types/DeleteTrafficPolicyExceptionsUnion";

export class DeleteTrafficPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTrafficPolicyInput,
      OutputTypesUnion,
      DeleteTrafficPolicyOutput,
      Route53ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteTrafficPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrafficPolicyInput,
    DeleteTrafficPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteTrafficPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTrafficPolicyInput,
    DeleteTrafficPolicyOutput
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
      handler<DeleteTrafficPolicyInput, DeleteTrafficPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
