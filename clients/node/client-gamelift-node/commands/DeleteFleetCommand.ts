import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteFleet } from "../model/operations/DeleteFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteFleetInput } from "../types/DeleteFleetInput";
import { DeleteFleetOutput } from "../types/DeleteFleetOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DeleteFleetInput";
export * from "../types/DeleteFleetOutput";
export * from "../types/DeleteFleetExceptionsUnion";

export class DeleteFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteFleetInput,
      OutputTypesUnion,
      DeleteFleetOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteFleetInput,
    DeleteFleetOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteFleetInput, DeleteFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteFleetInput, DeleteFleetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
