import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterManagedInstance } from "../model/operations/DeregisterManagedInstance";
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
      Blob
    > {
  readonly model = DeregisterManagedInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterManagedInstanceInput,
    DeregisterManagedInstanceOutput,
    Blob
  >();

  constructor(readonly input: DeregisterManagedInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
