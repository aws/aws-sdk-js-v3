import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFleetAttributes } from "../model/operations/UpdateFleetAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFleetAttributesInput } from "../types/UpdateFleetAttributesInput";
import { UpdateFleetAttributesOutput } from "../types/UpdateFleetAttributesOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/UpdateFleetAttributesInput";
export * from "../types/UpdateFleetAttributesOutput";
export * from "../types/UpdateFleetAttributesExceptionsUnion";

export class UpdateFleetAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFleetAttributesInput,
      OutputTypesUnion,
      UpdateFleetAttributesOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFleetAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFleetAttributesInput,
    UpdateFleetAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFleetAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFleetAttributesInput,
    UpdateFleetAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFleetAttributesInput, UpdateFleetAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
