import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AuthorizeIpRules } from "../model/operations/AuthorizeIpRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AuthorizeIpRulesInput } from "../types/AuthorizeIpRulesInput";
import { AuthorizeIpRulesOutput } from "../types/AuthorizeIpRulesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/AuthorizeIpRulesInput";
export * from "../types/AuthorizeIpRulesOutput";
export * from "../types/AuthorizeIpRulesExceptionsUnion";

export class AuthorizeIpRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AuthorizeIpRulesInput,
      OutputTypesUnion,
      AuthorizeIpRulesOutput,
      WorkSpacesResolvedConfiguration,
      Blob
    > {
  readonly model = AuthorizeIpRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeIpRulesInput,
    AuthorizeIpRulesOutput,
    Blob
  >();

  constructor(readonly input: AuthorizeIpRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<AuthorizeIpRulesInput, AuthorizeIpRulesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AuthorizeIpRulesInput, AuthorizeIpRulesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
