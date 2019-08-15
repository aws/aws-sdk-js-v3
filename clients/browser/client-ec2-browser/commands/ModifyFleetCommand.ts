import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyFleet } from "../model/operations/ModifyFleet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyFleetInput } from "../types/ModifyFleetInput";
import { ModifyFleetOutput } from "../types/ModifyFleetOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyFleetInput";
export * from "../types/ModifyFleetOutput";
export * from "../types/ModifyFleetExceptionsUnion";

export class ModifyFleetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyFleetInput,
      OutputTypesUnion,
      ModifyFleetOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyFleet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyFleetInput,
    ModifyFleetOutput,
    Blob
  >();

  constructor(readonly input: ModifyFleetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyFleetInput, ModifyFleetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyFleetInput, ModifyFleetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
