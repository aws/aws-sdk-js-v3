import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ConfigureHealthCheck } from "../model/operations/ConfigureHealthCheck";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ConfigureHealthCheckInput } from "../types/ConfigureHealthCheckInput";
import { ConfigureHealthCheckOutput } from "../types/ConfigureHealthCheckOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/ConfigureHealthCheckInput";
export * from "../types/ConfigureHealthCheckOutput";
export * from "../types/ConfigureHealthCheckExceptionsUnion";

export class ConfigureHealthCheckCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ConfigureHealthCheckInput,
      OutputTypesUnion,
      ConfigureHealthCheckOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ConfigureHealthCheck;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ConfigureHealthCheckInput,
    ConfigureHealthCheckOutput,
    _stream.Readable
  >();

  constructor(readonly input: ConfigureHealthCheckInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ConfigureHealthCheckInput,
    ConfigureHealthCheckOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ConfigureHealthCheckInput, ConfigureHealthCheckOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
