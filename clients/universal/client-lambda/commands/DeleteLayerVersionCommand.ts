import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteLayerVersion } from "../model/DeleteLayerVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteLayerVersionInput } from "../types/DeleteLayerVersionInput";
import { DeleteLayerVersionOutput } from "../types/DeleteLayerVersionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/DeleteLayerVersionInput";
export * from "../types/DeleteLayerVersionOutput";
export * from "../types/DeleteLayerVersionExceptionsUnion";

export class DeleteLayerVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteLayerVersionInput,
      OutputTypesUnion,
      DeleteLayerVersionOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteLayerVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteLayerVersionInput,
    DeleteLayerVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteLayerVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteLayerVersionInput,
    DeleteLayerVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteLayerVersionInput, DeleteLayerVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
