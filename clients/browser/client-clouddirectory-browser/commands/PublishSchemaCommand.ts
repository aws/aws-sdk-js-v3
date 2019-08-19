import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PublishSchema } from "../model/operations/PublishSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PublishSchemaInput } from "../types/PublishSchemaInput";
import { PublishSchemaOutput } from "../types/PublishSchemaOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/PublishSchemaInput";
export * from "../types/PublishSchemaOutput";
export * from "../types/PublishSchemaExceptionsUnion";

export class PublishSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PublishSchemaInput,
      OutputTypesUnion,
      PublishSchemaOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = PublishSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PublishSchemaInput,
    PublishSchemaOutput,
    Blob
  >();

  constructor(readonly input: PublishSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<PublishSchemaInput, PublishSchemaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PublishSchemaInput, PublishSchemaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
