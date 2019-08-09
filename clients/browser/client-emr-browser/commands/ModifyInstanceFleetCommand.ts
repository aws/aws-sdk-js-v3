import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyInstanceFleet } from "../model/ModifyInstanceFleet";
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
      Blob
    > {
  readonly model = ModifyInstanceFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyInstanceFleetInput,
    ModifyInstanceFleetOutput,
    Blob
  >();

  constructor(readonly input: ModifyInstanceFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
