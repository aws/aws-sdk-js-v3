import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteEnvironmentConfiguration } from "../model/DeleteEnvironmentConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteEnvironmentConfigurationInput } from "../types/DeleteEnvironmentConfigurationInput";
import { DeleteEnvironmentConfigurationOutput } from "../types/DeleteEnvironmentConfigurationOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DeleteEnvironmentConfigurationInput";
export * from "../types/DeleteEnvironmentConfigurationOutput";
export * from "../types/DeleteEnvironmentConfigurationExceptionsUnion";

export class DeleteEnvironmentConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteEnvironmentConfigurationInput,
      OutputTypesUnion,
      DeleteEnvironmentConfigurationOutput,
      ElasticBeanstalkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteEnvironmentConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteEnvironmentConfigurationInput,
    DeleteEnvironmentConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteEnvironmentConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteEnvironmentConfigurationInput,
    DeleteEnvironmentConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteEnvironmentConfigurationInput,
        DeleteEnvironmentConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
