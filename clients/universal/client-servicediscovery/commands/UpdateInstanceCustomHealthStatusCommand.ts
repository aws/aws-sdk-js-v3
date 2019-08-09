import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateInstanceCustomHealthStatus } from "../model/UpdateInstanceCustomHealthStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateInstanceCustomHealthStatusInput } from "../types/UpdateInstanceCustomHealthStatusInput";
import { UpdateInstanceCustomHealthStatusOutput } from "../types/UpdateInstanceCustomHealthStatusOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/UpdateInstanceCustomHealthStatusInput";
export * from "../types/UpdateInstanceCustomHealthStatusOutput";
export * from "../types/UpdateInstanceCustomHealthStatusExceptionsUnion";

export class UpdateInstanceCustomHealthStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateInstanceCustomHealthStatusInput,
      OutputTypesUnion,
      UpdateInstanceCustomHealthStatusOutput,
      ServiceDiscoveryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateInstanceCustomHealthStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateInstanceCustomHealthStatusInput,
    UpdateInstanceCustomHealthStatusOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateInstanceCustomHealthStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateInstanceCustomHealthStatusInput,
    UpdateInstanceCustomHealthStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateInstanceCustomHealthStatusInput,
        UpdateInstanceCustomHealthStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
