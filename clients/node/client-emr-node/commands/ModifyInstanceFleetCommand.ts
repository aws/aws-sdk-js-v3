import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyInstanceFleet } from "../model/operations/ModifyInstanceFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyInstanceFleetInput } from "../types/ModifyInstanceFleetInput";
import { ModifyInstanceFleetOutput } from "../types/ModifyInstanceFleetOutput";
import { EMRResolvedConfiguration } from "../EMRConfiguration";
export * from "../types/ModifyInstanceFleetInput";
export * from "../types/ModifyInstanceFleetOutput";
export * from "../types/ModifyInstanceFleetExceptionsUnion";

export class ModifyInstanceFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyInstanceFleetInput,
      OutputTypesUnion,
      ModifyInstanceFleetOutput,
      EMRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyInstanceFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyInstanceFleetInput,
    ModifyInstanceFleetOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyInstanceFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EMRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyInstanceFleetInput,
    ModifyInstanceFleetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyInstanceFleetInput, ModifyInstanceFleetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
