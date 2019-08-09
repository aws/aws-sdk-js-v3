import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutSchemaFromJson } from "../model/PutSchemaFromJson";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutSchemaFromJsonInput } from "../types/PutSchemaFromJsonInput";
import { PutSchemaFromJsonOutput } from "../types/PutSchemaFromJsonOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/PutSchemaFromJsonInput";
export * from "../types/PutSchemaFromJsonOutput";
export * from "../types/PutSchemaFromJsonExceptionsUnion";

export class PutSchemaFromJsonCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutSchemaFromJsonInput,
      OutputTypesUnion,
      PutSchemaFromJsonOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PutSchemaFromJson;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutSchemaFromJsonInput,
    PutSchemaFromJsonOutput,
    Uint8Array
  >();

  constructor(readonly input: PutSchemaFromJsonInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<PutSchemaFromJsonInput, PutSchemaFromJsonOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutSchemaFromJsonInput, PutSchemaFromJsonOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
