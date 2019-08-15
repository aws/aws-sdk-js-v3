import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetChange } from "../model/operations/GetChange";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetChangeInput } from "../types/GetChangeInput";
import { GetChangeOutput } from "../types/GetChangeOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/GetChangeInput";
export * from "../types/GetChangeOutput";
export * from "../types/GetChangeExceptionsUnion";

export class GetChangeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetChangeInput,
      OutputTypesUnion,
      GetChangeOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = GetChange;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetChangeInput,
    GetChangeOutput,
    Blob
  >();

  constructor(readonly input: GetChangeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<GetChangeInput, GetChangeOutput> {
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
      handler<GetChangeInput, GetChangeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
