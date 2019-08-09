import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetAppliedSchemaVersion } from "../model/GetAppliedSchemaVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAppliedSchemaVersionInput } from "../types/GetAppliedSchemaVersionInput";
import { GetAppliedSchemaVersionOutput } from "../types/GetAppliedSchemaVersionOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/GetAppliedSchemaVersionInput";
export * from "../types/GetAppliedSchemaVersionOutput";
export * from "../types/GetAppliedSchemaVersionExceptionsUnion";

export class GetAppliedSchemaVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAppliedSchemaVersionInput,
      OutputTypesUnion,
      GetAppliedSchemaVersionOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = GetAppliedSchemaVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAppliedSchemaVersionInput,
    GetAppliedSchemaVersionOutput,
    Blob
  >();

  constructor(readonly input: GetAppliedSchemaVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAppliedSchemaVersionInput,
    GetAppliedSchemaVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAppliedSchemaVersionInput, GetAppliedSchemaVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
