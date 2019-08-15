import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteTrafficPolicyInstance } from "../model/operations/DeleteTrafficPolicyInstance";
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
      _stream.Readable
    > {
  readonly model = DeleteTrafficPolicyInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrafficPolicyInstanceInput,
    DeleteTrafficPolicyInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteTrafficPolicyInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
