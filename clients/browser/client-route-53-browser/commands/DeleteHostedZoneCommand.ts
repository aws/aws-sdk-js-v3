import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteHostedZone } from "../model/operations/DeleteHostedZone";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteHostedZoneInput } from "../types/DeleteHostedZoneInput";
import { DeleteHostedZoneOutput } from "../types/DeleteHostedZoneOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/DeleteHostedZoneInput";
export * from "../types/DeleteHostedZoneOutput";
export * from "../types/DeleteHostedZoneExceptionsUnion";

export class DeleteHostedZoneCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteHostedZoneInput,
      OutputTypesUnion,
      DeleteHostedZoneOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteHostedZone;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteHostedZoneInput,
    DeleteHostedZoneOutput,
    Blob
  >();

  constructor(readonly input: DeleteHostedZoneInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteHostedZoneInput, DeleteHostedZoneOutput> {
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
      handler<DeleteHostedZoneInput, DeleteHostedZoneOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
