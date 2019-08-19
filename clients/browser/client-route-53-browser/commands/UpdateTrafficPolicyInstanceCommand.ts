import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateTrafficPolicyInstance } from "../model/operations/UpdateTrafficPolicyInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTrafficPolicyInstanceInput } from "../types/UpdateTrafficPolicyInstanceInput";
import { UpdateTrafficPolicyInstanceOutput } from "../types/UpdateTrafficPolicyInstanceOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/UpdateTrafficPolicyInstanceInput";
export * from "../types/UpdateTrafficPolicyInstanceOutput";
export * from "../types/UpdateTrafficPolicyInstanceExceptionsUnion";

export class UpdateTrafficPolicyInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTrafficPolicyInstanceInput,
      OutputTypesUnion,
      UpdateTrafficPolicyInstanceOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateTrafficPolicyInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTrafficPolicyInstanceInput,
    UpdateTrafficPolicyInstanceOutput,
    Blob
  >();

  constructor(readonly input: UpdateTrafficPolicyInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateTrafficPolicyInstanceInput,
    UpdateTrafficPolicyInstanceOutput
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
        UpdateTrafficPolicyInstanceInput,
        UpdateTrafficPolicyInstanceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
