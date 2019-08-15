import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddInstanceFleet } from "../model/operations/AddInstanceFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddInstanceFleetInput } from "../types/AddInstanceFleetInput";
import { AddInstanceFleetOutput } from "../types/AddInstanceFleetOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/AddInstanceFleetInput";
export * from "../types/AddInstanceFleetOutput";
export * from "../types/AddInstanceFleetExceptionsUnion";

export class AddInstanceFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddInstanceFleetInput,
      OutputTypesUnion,
      AddInstanceFleetOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddInstanceFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddInstanceFleetInput,
    AddInstanceFleetOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddInstanceFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<AddInstanceFleetInput, AddInstanceFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddInstanceFleetInput, AddInstanceFleetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
