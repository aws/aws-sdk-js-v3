import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetConsoleScreenshot } from "../model/GetConsoleScreenshot";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConsoleScreenshotInput } from "../types/GetConsoleScreenshotInput";
import { GetConsoleScreenshotOutput } from "../types/GetConsoleScreenshotOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/GetConsoleScreenshotInput";
export * from "../types/GetConsoleScreenshotOutput";
export * from "../types/GetConsoleScreenshotExceptionsUnion";

export class GetConsoleScreenshotCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConsoleScreenshotInput,
      OutputTypesUnion,
      GetConsoleScreenshotOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetConsoleScreenshot;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConsoleScreenshotInput,
    GetConsoleScreenshotOutput,
    Uint8Array
  >();

  constructor(readonly input: GetConsoleScreenshotInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConsoleScreenshotInput,
    GetConsoleScreenshotOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetConsoleScreenshotInput, GetConsoleScreenshotOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
