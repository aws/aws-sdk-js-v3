import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInstancesHealthStatus } from "../model/GetInstancesHealthStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInstancesHealthStatusInput } from "../types/GetInstancesHealthStatusInput";
import { GetInstancesHealthStatusOutput } from "../types/GetInstancesHealthStatusOutput";
import { ServiceDiscoveryResolvedConfiguration } from "../ServiceDiscoveryConfiguration";
export * from "../types/GetInstancesHealthStatusInput";
export * from "../types/GetInstancesHealthStatusOutput";
export * from "../types/GetInstancesHealthStatusExceptionsUnion";

export class GetInstancesHealthStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInstancesHealthStatusInput,
      OutputTypesUnion,
      GetInstancesHealthStatusOutput,
      ServiceDiscoveryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetInstancesHealthStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInstancesHealthStatusInput,
    GetInstancesHealthStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInstancesHealthStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceDiscoveryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInstancesHealthStatusInput,
    GetInstancesHealthStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInstancesHealthStatusInput, GetInstancesHealthStatusOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
