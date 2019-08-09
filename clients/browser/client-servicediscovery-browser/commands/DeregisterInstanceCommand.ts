import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeregisterInstance } from "../model/DeregisterInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterInstanceInput } from "../types/DeregisterInstanceInput";
import { DeregisterInstanceOutput } from "../types/DeregisterInstanceOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/DeregisterInstanceInput";
export * from "../types/DeregisterInstanceOutput";
export * from "../types/DeregisterInstanceExceptionsUnion";

export class DeregisterInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterInstanceInput,
      OutputTypesUnion,
      DeregisterInstanceOutput,
      ServiceDiscoveryResolvedConfiguration,
      Blob
    > {
  readonly model = DeregisterInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterInstanceInput,
    DeregisterInstanceOutput,
    Blob
  >();

  constructor(readonly input: DeregisterInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterInstanceInput,
    DeregisterInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterInstanceInput, DeregisterInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
