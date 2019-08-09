import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyCurrentDBClusterCapacity } from "../model/ModifyCurrentDBClusterCapacity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyCurrentDBClusterCapacityInput } from "../types/ModifyCurrentDBClusterCapacityInput";
import { ModifyCurrentDBClusterCapacityOutput } from "../types/ModifyCurrentDBClusterCapacityOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyCurrentDBClusterCapacityInput";
export * from "../types/ModifyCurrentDBClusterCapacityOutput";
export * from "../types/ModifyCurrentDBClusterCapacityExceptionsUnion";

export class ModifyCurrentDBClusterCapacityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyCurrentDBClusterCapacityInput,
      OutputTypesUnion,
      ModifyCurrentDBClusterCapacityOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyCurrentDBClusterCapacity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyCurrentDBClusterCapacityInput,
    ModifyCurrentDBClusterCapacityOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyCurrentDBClusterCapacityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyCurrentDBClusterCapacityInput,
    ModifyCurrentDBClusterCapacityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyCurrentDBClusterCapacityInput,
        ModifyCurrentDBClusterCapacityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
