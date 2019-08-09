import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableSecurityHub } from "../model/DisableSecurityHub";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableSecurityHubInput } from "../types/DisableSecurityHubInput";
import { DisableSecurityHubOutput } from "../types/DisableSecurityHubOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DisableSecurityHubInput";
export * from "../types/DisableSecurityHubOutput";
export * from "../types/DisableSecurityHubExceptionsUnion";

export class DisableSecurityHubCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableSecurityHubInput,
      OutputTypesUnion,
      DisableSecurityHubOutput,
      SecurityHubResolvedConfiguration,
      Blob
    > {
  readonly model = DisableSecurityHub;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableSecurityHubInput,
    DisableSecurityHubOutput,
    Blob
  >();

  constructor(readonly input: DisableSecurityHubInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisableSecurityHubInput,
    DisableSecurityHubOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableSecurityHubInput, DisableSecurityHubOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
