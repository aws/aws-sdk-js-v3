import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AuthorizeIpRules } from "../model/AuthorizeIpRules";
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
      _stream.Readable
    > {
  readonly model = AuthorizeIpRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeIpRulesInput,
    AuthorizeIpRulesOutput,
    _stream.Readable
  >();

  constructor(readonly input: AuthorizeIpRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
