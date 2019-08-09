import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateFleet } from "../model/UpdateFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFleetInput } from "../types/UpdateFleetInput";
import { UpdateFleetOutput } from "../types/UpdateFleetOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/UpdateFleetInput";
export * from "../types/UpdateFleetOutput";
export * from "../types/UpdateFleetExceptionsUnion";

export class UpdateFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFleetInput,
      OutputTypesUnion,
      UpdateFleetOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFleetInput,
    UpdateFleetOutput,
    Blob
  >();

  constructor(readonly input: UpdateFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateFleetInput, UpdateFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFleetInput, UpdateFleetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
