import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVPCAssociationAuthorization } from "../model/DeleteVPCAssociationAuthorization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVPCAssociationAuthorizationInput } from "../types/DeleteVPCAssociationAuthorizationInput";
import { DeleteVPCAssociationAuthorizationOutput } from "../types/DeleteVPCAssociationAuthorizationOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/DeleteVPCAssociationAuthorizationInput";
export * from "../types/DeleteVPCAssociationAuthorizationOutput";
export * from "../types/DeleteVPCAssociationAuthorizationExceptionsUnion";

export class DeleteVPCAssociationAuthorizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVPCAssociationAuthorizationInput,
      OutputTypesUnion,
      DeleteVPCAssociationAuthorizationOutput,
      Route53ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteVPCAssociationAuthorization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVPCAssociationAuthorizationInput,
    DeleteVPCAssociationAuthorizationOutput,
    Blob
  >();

  constructor(readonly input: DeleteVPCAssociationAuthorizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVPCAssociationAuthorizationInput,
    DeleteVPCAssociationAuthorizationOutput
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
        DeleteVPCAssociationAuthorizationInput,
        DeleteVPCAssociationAuthorizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
