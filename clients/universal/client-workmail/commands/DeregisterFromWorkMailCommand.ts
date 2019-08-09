import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterFromWorkMail } from "../model/DeregisterFromWorkMail";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterFromWorkMailInput } from "../types/DeregisterFromWorkMailInput";
import { DeregisterFromWorkMailOutput } from "../types/DeregisterFromWorkMailOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/DeregisterFromWorkMailInput";
export * from "../types/DeregisterFromWorkMailOutput";
export * from "../types/DeregisterFromWorkMailExceptionsUnion";

export class DeregisterFromWorkMailCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterFromWorkMailInput,
      OutputTypesUnion,
      DeregisterFromWorkMailOutput,
      WorkMailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeregisterFromWorkMail;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterFromWorkMailInput,
    DeregisterFromWorkMailOutput,
    Uint8Array
  >();

  constructor(readonly input: DeregisterFromWorkMailInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterFromWorkMailInput,
    DeregisterFromWorkMailOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterFromWorkMailInput, DeregisterFromWorkMailOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
