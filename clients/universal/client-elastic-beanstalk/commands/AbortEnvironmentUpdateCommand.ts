import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AbortEnvironmentUpdate } from "../model/AbortEnvironmentUpdate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AbortEnvironmentUpdateInput } from "../types/AbortEnvironmentUpdateInput";
import { AbortEnvironmentUpdateOutput } from "../types/AbortEnvironmentUpdateOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/AbortEnvironmentUpdateInput";
export * from "../types/AbortEnvironmentUpdateOutput";
export * from "../types/AbortEnvironmentUpdateExceptionsUnion";

export class AbortEnvironmentUpdateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AbortEnvironmentUpdateInput,
      OutputTypesUnion,
      AbortEnvironmentUpdateOutput,
      ElasticBeanstalkResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AbortEnvironmentUpdate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AbortEnvironmentUpdateInput,
    AbortEnvironmentUpdateOutput,
    Uint8Array
  >();

  constructor(readonly input: AbortEnvironmentUpdateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AbortEnvironmentUpdateInput,
    AbortEnvironmentUpdateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AbortEnvironmentUpdateInput, AbortEnvironmentUpdateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
