import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterManagedInstance } from "../model/DeregisterManagedInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterManagedInstanceInput } from "../types/DeregisterManagedInstanceInput";
import { DeregisterManagedInstanceOutput } from "../types/DeregisterManagedInstanceOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DeregisterManagedInstanceInput";
export * from "../types/DeregisterManagedInstanceOutput";
export * from "../types/DeregisterManagedInstanceExceptionsUnion";

export class DeregisterManagedInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterManagedInstanceInput,
      OutputTypesUnion,
      DeregisterManagedInstanceOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeregisterManagedInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterManagedInstanceInput,
    DeregisterManagedInstanceOutput,
    Uint8Array
  >();

  constructor(readonly input: DeregisterManagedInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterManagedInstanceInput,
    DeregisterManagedInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterManagedInstanceInput, DeregisterManagedInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
