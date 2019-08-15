import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpgradePublishedSchema } from "../model/operations/UpgradePublishedSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpgradePublishedSchemaInput } from "../types/UpgradePublishedSchemaInput";
import { UpgradePublishedSchemaOutput } from "../types/UpgradePublishedSchemaOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/UpgradePublishedSchemaInput";
export * from "../types/UpgradePublishedSchemaOutput";
export * from "../types/UpgradePublishedSchemaExceptionsUnion";

export class UpgradePublishedSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpgradePublishedSchemaInput,
      OutputTypesUnion,
      UpgradePublishedSchemaOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = UpgradePublishedSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpgradePublishedSchemaInput,
    UpgradePublishedSchemaOutput,
    Blob
  >();

  constructor(readonly input: UpgradePublishedSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpgradePublishedSchemaInput,
    UpgradePublishedSchemaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpgradePublishedSchemaInput, UpgradePublishedSchemaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
