import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApp } from "../model/operations/DeleteApp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAppInput } from "../types/DeleteAppInput";
import { DeleteAppOutput } from "../types/DeleteAppOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/DeleteAppInput";
export * from "../types/DeleteAppOutput";
export * from "../types/DeleteAppExceptionsUnion";

export class DeleteAppCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAppInput,
      OutputTypesUnion,
      DeleteAppOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteApp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAppInput,
    DeleteAppOutput,
    Blob
  >();

  constructor(readonly input: DeleteAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAppInput, DeleteAppOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAppInput, DeleteAppOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
