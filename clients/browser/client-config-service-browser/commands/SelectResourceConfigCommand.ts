import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SelectResourceConfig } from "../model/SelectResourceConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SelectResourceConfigInput } from "../types/SelectResourceConfigInput";
import { SelectResourceConfigOutput } from "../types/SelectResourceConfigOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/SelectResourceConfigInput";
export * from "../types/SelectResourceConfigOutput";
export * from "../types/SelectResourceConfigExceptionsUnion";

export class SelectResourceConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SelectResourceConfigInput,
      OutputTypesUnion,
      SelectResourceConfigOutput,
      ConfigServiceResolvedConfiguration,
      Blob
    > {
  readonly model = SelectResourceConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SelectResourceConfigInput,
    SelectResourceConfigOutput,
    Blob
  >();

  constructor(readonly input: SelectResourceConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SelectResourceConfigInput,
    SelectResourceConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SelectResourceConfigInput, SelectResourceConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
