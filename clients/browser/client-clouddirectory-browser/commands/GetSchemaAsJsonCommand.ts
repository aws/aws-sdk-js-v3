import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSchemaAsJson } from "../model/operations/GetSchemaAsJson";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSchemaAsJsonInput } from "../types/GetSchemaAsJsonInput";
import { GetSchemaAsJsonOutput } from "../types/GetSchemaAsJsonOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/GetSchemaAsJsonInput";
export * from "../types/GetSchemaAsJsonOutput";
export * from "../types/GetSchemaAsJsonExceptionsUnion";

export class GetSchemaAsJsonCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSchemaAsJsonInput,
      OutputTypesUnion,
      GetSchemaAsJsonOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = GetSchemaAsJson;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSchemaAsJsonInput,
    GetSchemaAsJsonOutput,
    Blob
  >();

  constructor(readonly input: GetSchemaAsJsonInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSchemaAsJsonInput, GetSchemaAsJsonOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSchemaAsJsonInput, GetSchemaAsJsonOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
