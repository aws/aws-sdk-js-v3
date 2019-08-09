import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { EnableSecurityHub } from "../model/EnableSecurityHub";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { EnableSecurityHubInput } from "../types/EnableSecurityHubInput";
import { EnableSecurityHubOutput } from "../types/EnableSecurityHubOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/EnableSecurityHubInput";
export * from "../types/EnableSecurityHubOutput";
export * from "../types/EnableSecurityHubExceptionsUnion";

export class EnableSecurityHubCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      EnableSecurityHubInput,
      OutputTypesUnion,
      EnableSecurityHubOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = EnableSecurityHub;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    EnableSecurityHubInput,
    EnableSecurityHubOutput,
    Blob
  >();

  constructor(readonly input: EnableSecurityHubInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<EnableSecurityHubInput, EnableSecurityHubOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<EnableSecurityHubInput, EnableSecurityHubOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
