import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTrafficPolicyInstance } from "../model/DeleteTrafficPolicyInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTrafficPolicyInstanceInput } from "../types/DeleteTrafficPolicyInstanceInput";
import { DeleteTrafficPolicyInstanceOutput } from "../types/DeleteTrafficPolicyInstanceOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/DeleteTrafficPolicyInstanceInput";
export * from "../types/DeleteTrafficPolicyInstanceOutput";
export * from "../types/DeleteTrafficPolicyInstanceExceptionsUnion";

export class DeleteTrafficPolicyInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTrafficPolicyInstanceInput,
      OutputTypesUnion,
      DeleteTrafficPolicyInstanceOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTrafficPolicyInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrafficPolicyInstanceInput,
    DeleteTrafficPolicyInstanceOutput,
    Blob
  >();

  constructor(readonly input: DeleteTrafficPolicyInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTrafficPolicyInstanceInput,
    DeleteTrafficPolicyInstanceOutput
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
        DeleteTrafficPolicyInstanceInput,
        DeleteTrafficPolicyInstanceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
