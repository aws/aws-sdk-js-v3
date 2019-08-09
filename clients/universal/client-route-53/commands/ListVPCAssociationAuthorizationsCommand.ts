import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_route53_id_normalizer_middleware from "@aws-sdk/route53-id-normalizer-middleware";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVPCAssociationAuthorizations } from "../model/ListVPCAssociationAuthorizations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVPCAssociationAuthorizationsInput } from "../types/ListVPCAssociationAuthorizationsInput";
import { ListVPCAssociationAuthorizationsOutput } from "../types/ListVPCAssociationAuthorizationsOutput";
import { Route53ResolvedConfiguration } from "../Route53Configuration";
export * from "../types/ListVPCAssociationAuthorizationsInput";
export * from "../types/ListVPCAssociationAuthorizationsOutput";
export * from "../types/ListVPCAssociationAuthorizationsExceptionsUnion";

export class ListVPCAssociationAuthorizationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVPCAssociationAuthorizationsInput,
      OutputTypesUnion,
      ListVPCAssociationAuthorizationsOutput,
      Route53ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListVPCAssociationAuthorizations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVPCAssociationAuthorizationsInput,
    ListVPCAssociationAuthorizationsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListVPCAssociationAuthorizationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: Route53ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVPCAssociationAuthorizationsInput,
    ListVPCAssociationAuthorizationsOutput
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
        ListVPCAssociationAuthorizationsInput,
        ListVPCAssociationAuthorizationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
