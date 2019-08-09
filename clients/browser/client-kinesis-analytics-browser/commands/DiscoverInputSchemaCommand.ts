import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DiscoverInputSchema } from "../model/DiscoverInputSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DiscoverInputSchemaInput } from "../types/DiscoverInputSchemaInput";
import { DiscoverInputSchemaOutput } from "../types/DiscoverInputSchemaOutput";
import { KinesisAnalyticsResolvedConfiguration } from "../KinesisAnalyticsConfiguration";
export * from "../types/DiscoverInputSchemaInput";
export * from "../types/DiscoverInputSchemaOutput";
export * from "../types/DiscoverInputSchemaExceptionsUnion";

export class DiscoverInputSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DiscoverInputSchemaInput,
      OutputTypesUnion,
      DiscoverInputSchemaOutput,
      KinesisAnalyticsResolvedConfiguration,
      Blob
    > {
  readonly model = DiscoverInputSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DiscoverInputSchemaInput,
    DiscoverInputSchemaOutput,
    Blob
  >();

  constructor(readonly input: DiscoverInputSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisAnalyticsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DiscoverInputSchemaInput,
    DiscoverInputSchemaOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DiscoverInputSchemaInput, DiscoverInputSchemaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
