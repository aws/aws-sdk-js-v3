import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopContact } from "../model/StopContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopContactInput } from "../types/StopContactInput";
import { StopContactOutput } from "../types/StopContactOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/StopContactInput";
export * from "../types/StopContactOutput";
export * from "../types/StopContactExceptionsUnion";

export class StopContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopContactInput,
      OutputTypesUnion,
      StopContactOutput,
      ConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = StopContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopContactInput,
    StopContactOutput,
    Uint8Array
  >();

  constructor(readonly input: StopContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<StopContactInput, StopContactOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopContactInput, StopContactOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
