import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestorePhoneNumber } from "../model/RestorePhoneNumber";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestorePhoneNumberInput } from "../types/RestorePhoneNumberInput";
import { RestorePhoneNumberOutput } from "../types/RestorePhoneNumberOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/RestorePhoneNumberInput";
export * from "../types/RestorePhoneNumberOutput";
export * from "../types/RestorePhoneNumberExceptionsUnion";

export class RestorePhoneNumberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestorePhoneNumberInput,
      OutputTypesUnion,
      RestorePhoneNumberOutput,
      ChimeResolvedConfiguration,
      Blob
    > {
  readonly model = RestorePhoneNumber;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestorePhoneNumberInput,
    RestorePhoneNumberOutput,
    Blob
  >();

  constructor(readonly input: RestorePhoneNumberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestorePhoneNumberInput,
    RestorePhoneNumberOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestorePhoneNumberInput, RestorePhoneNumberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
