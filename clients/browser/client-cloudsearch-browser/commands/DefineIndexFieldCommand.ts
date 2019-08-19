import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DefineIndexField } from "../model/operations/DefineIndexField";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DefineIndexFieldInput } from "../types/DefineIndexFieldInput";
import { DefineIndexFieldOutput } from "../types/DefineIndexFieldOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DefineIndexFieldInput";
export * from "../types/DefineIndexFieldOutput";
export * from "../types/DefineIndexFieldExceptionsUnion";

export class DefineIndexFieldCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DefineIndexFieldInput,
      OutputTypesUnion,
      DefineIndexFieldOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = DefineIndexField;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DefineIndexFieldInput,
    DefineIndexFieldOutput,
    Blob
  >();

  constructor(readonly input: DefineIndexFieldInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<DefineIndexFieldInput, DefineIndexFieldOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DefineIndexFieldInput, DefineIndexFieldOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
