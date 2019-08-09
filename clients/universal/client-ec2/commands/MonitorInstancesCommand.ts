import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { MonitorInstances } from "../model/MonitorInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { MonitorInstancesInput } from "../types/MonitorInstancesInput";
import { MonitorInstancesOutput } from "../types/MonitorInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/MonitorInstancesInput";
export * from "../types/MonitorInstancesOutput";
export * from "../types/MonitorInstancesExceptionsUnion";

export class MonitorInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      MonitorInstancesInput,
      OutputTypesUnion,
      MonitorInstancesOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = MonitorInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    MonitorInstancesInput,
    MonitorInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: MonitorInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<MonitorInstancesInput, MonitorInstancesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<MonitorInstancesInput, MonitorInstancesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
