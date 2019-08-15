import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DiscoverInputSchema } from "../model/operations/DiscoverInputSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DiscoverInputSchemaInput } from "../types/DiscoverInputSchemaInput";
import { DiscoverInputSchemaOutput } from "../types/DiscoverInputSchemaOutput";
import { KinesisAnalyticsV2ResolvedConfiguration } from "../KinesisAnalyticsV2Configuration";
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
      KinesisAnalyticsV2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DiscoverInputSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DiscoverInputSchemaInput,
    DiscoverInputSchemaOutput,
    _stream.Readable
  >();

  constructor(readonly input: DiscoverInputSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: KinesisAnalyticsV2ResolvedConfiguration
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
