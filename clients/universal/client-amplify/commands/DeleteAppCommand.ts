import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApp } from "../model/DeleteApp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAppInput } from "../types/DeleteAppInput";
import { DeleteAppOutput } from "../types/DeleteAppOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
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
      AmplifyResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteApp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAppInput,
    DeleteAppOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AmplifyResolvedConfiguration
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
