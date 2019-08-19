import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ApplySchema } from "../model/operations/ApplySchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ApplySchemaInput } from "../types/ApplySchemaInput";
import { ApplySchemaOutput } from "../types/ApplySchemaOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/ApplySchemaInput";
export * from "../types/ApplySchemaOutput";
export * from "../types/ApplySchemaExceptionsUnion";

export class ApplySchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ApplySchemaInput,
      OutputTypesUnion,
      ApplySchemaOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ApplySchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ApplySchemaInput,
    ApplySchemaOutput,
    _stream.Readable
  >();

  constructor(readonly input: ApplySchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<ApplySchemaInput, ApplySchemaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ApplySchemaInput, ApplySchemaOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
