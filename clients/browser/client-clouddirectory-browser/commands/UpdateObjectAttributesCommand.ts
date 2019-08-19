import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateObjectAttributes } from "../model/operations/UpdateObjectAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateObjectAttributesInput } from "../types/UpdateObjectAttributesInput";
import { UpdateObjectAttributesOutput } from "../types/UpdateObjectAttributesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/UpdateObjectAttributesInput";
export * from "../types/UpdateObjectAttributesOutput";
export * from "../types/UpdateObjectAttributesExceptionsUnion";

export class UpdateObjectAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateObjectAttributesInput,
      OutputTypesUnion,
      UpdateObjectAttributesOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateObjectAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateObjectAttributesInput,
    UpdateObjectAttributesOutput,
    Blob
  >();

  constructor(readonly input: UpdateObjectAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateObjectAttributesInput,
    UpdateObjectAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateObjectAttributesInput, UpdateObjectAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
