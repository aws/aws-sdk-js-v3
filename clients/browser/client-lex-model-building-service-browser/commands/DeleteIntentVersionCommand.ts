import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteIntentVersion } from "../model/operations/DeleteIntentVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIntentVersionInput } from "../types/DeleteIntentVersionInput";
import { DeleteIntentVersionOutput } from "../types/DeleteIntentVersionOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/DeleteIntentVersionInput";
export * from "../types/DeleteIntentVersionOutput";
export * from "../types/DeleteIntentVersionExceptionsUnion";

export class DeleteIntentVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIntentVersionInput,
      OutputTypesUnion,
      DeleteIntentVersionOutput,
      LexModelBuildingServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteIntentVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIntentVersionInput,
    DeleteIntentVersionOutput,
    Blob
  >();

  constructor(readonly input: DeleteIntentVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteIntentVersionInput,
    DeleteIntentVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIntentVersionInput, DeleteIntentVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
