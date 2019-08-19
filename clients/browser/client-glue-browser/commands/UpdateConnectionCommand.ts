import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateConnection } from "../model/operations/UpdateConnection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateConnectionInput } from "../types/UpdateConnectionInput";
import { UpdateConnectionOutput } from "../types/UpdateConnectionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/UpdateConnectionInput";
export * from "../types/UpdateConnectionOutput";
export * from "../types/UpdateConnectionExceptionsUnion";

export class UpdateConnectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateConnectionInput,
      OutputTypesUnion,
      UpdateConnectionOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateConnection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateConnectionInput,
    UpdateConnectionOutput,
    Blob
  >();

  constructor(readonly input: UpdateConnectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateConnectionInput, UpdateConnectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateConnectionInput, UpdateConnectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
