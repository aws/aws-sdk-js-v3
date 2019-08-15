import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetObjectAttributes } from "../model/operations/GetObjectAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetObjectAttributesInput } from "../types/GetObjectAttributesInput";
import { GetObjectAttributesOutput } from "../types/GetObjectAttributesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/GetObjectAttributesInput";
export * from "../types/GetObjectAttributesOutput";
export * from "../types/GetObjectAttributesExceptionsUnion";

export class GetObjectAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetObjectAttributesInput,
      OutputTypesUnion,
      GetObjectAttributesOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = GetObjectAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetObjectAttributesInput,
    GetObjectAttributesOutput,
    Blob
  >();

  constructor(readonly input: GetObjectAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetObjectAttributesInput,
    GetObjectAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetObjectAttributesInput, GetObjectAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
