import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetResolverRuleAssociation } from "../model/GetResolverRuleAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResolverRuleAssociationInput } from "../types/GetResolverRuleAssociationInput";
import { GetResolverRuleAssociationOutput } from "../types/GetResolverRuleAssociationOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/GetResolverRuleAssociationInput";
export * from "../types/GetResolverRuleAssociationOutput";
export * from "../types/GetResolverRuleAssociationExceptionsUnion";

export class GetResolverRuleAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResolverRuleAssociationInput,
      OutputTypesUnion,
      GetResolverRuleAssociationOutput,
      Route53ResolverResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetResolverRuleAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResolverRuleAssociationInput,
    GetResolverRuleAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetResolverRuleAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResolverRuleAssociationInput,
    GetResolverRuleAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetResolverRuleAssociationInput,
        GetResolverRuleAssociationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
