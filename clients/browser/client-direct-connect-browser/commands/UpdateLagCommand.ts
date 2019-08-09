import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateLag } from "../model/UpdateLag";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLagInput } from "../types/UpdateLagInput";
import { UpdateLagOutput } from "../types/UpdateLagOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/UpdateLagInput";
export * from "../types/UpdateLagOutput";
export * from "../types/UpdateLagExceptionsUnion";

export class UpdateLagCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLagInput,
      OutputTypesUnion,
      UpdateLagOutput,
      DirectConnectResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateLag;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLagInput,
    UpdateLagOutput,
    Blob
  >();

  constructor(readonly input: UpdateLagInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateLagInput, UpdateLagOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateLagInput, UpdateLagOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
