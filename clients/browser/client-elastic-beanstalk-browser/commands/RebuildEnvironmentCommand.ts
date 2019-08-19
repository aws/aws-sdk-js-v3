import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RebuildEnvironment } from "../model/operations/RebuildEnvironment";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RebuildEnvironmentInput } from "../types/RebuildEnvironmentInput";
import { RebuildEnvironmentOutput } from "../types/RebuildEnvironmentOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/RebuildEnvironmentInput";
export * from "../types/RebuildEnvironmentOutput";
export * from "../types/RebuildEnvironmentExceptionsUnion";

export class RebuildEnvironmentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RebuildEnvironmentInput,
      OutputTypesUnion,
      RebuildEnvironmentOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = RebuildEnvironment;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RebuildEnvironmentInput,
    RebuildEnvironmentOutput,
    Blob
  >();

  constructor(readonly input: RebuildEnvironmentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RebuildEnvironmentInput,
    RebuildEnvironmentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RebuildEnvironmentInput, RebuildEnvironmentOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
