import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyReservedInstances } from "../model/ModifyReservedInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyReservedInstancesInput } from "../types/ModifyReservedInstancesInput";
import { ModifyReservedInstancesOutput } from "../types/ModifyReservedInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyReservedInstancesInput";
export * from "../types/ModifyReservedInstancesOutput";
export * from "../types/ModifyReservedInstancesExceptionsUnion";

export class ModifyReservedInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyReservedInstancesInput,
      OutputTypesUnion,
      ModifyReservedInstancesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyReservedInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyReservedInstancesInput,
    ModifyReservedInstancesOutput,
    Blob
  >();

  constructor(readonly input: ModifyReservedInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyReservedInstancesInput,
    ModifyReservedInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyReservedInstancesInput, ModifyReservedInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
