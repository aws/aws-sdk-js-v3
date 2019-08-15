import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ApplyEnvironmentManagedAction } from "../model/operations/ApplyEnvironmentManagedAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ApplyEnvironmentManagedActionInput } from "../types/ApplyEnvironmentManagedActionInput";
import { ApplyEnvironmentManagedActionOutput } from "../types/ApplyEnvironmentManagedActionOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/ApplyEnvironmentManagedActionInput";
export * from "../types/ApplyEnvironmentManagedActionOutput";
export * from "../types/ApplyEnvironmentManagedActionExceptionsUnion";

export class ApplyEnvironmentManagedActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ApplyEnvironmentManagedActionInput,
      OutputTypesUnion,
      ApplyEnvironmentManagedActionOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = ApplyEnvironmentManagedAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ApplyEnvironmentManagedActionInput,
    ApplyEnvironmentManagedActionOutput,
    Blob
  >();

  constructor(readonly input: ApplyEnvironmentManagedActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ApplyEnvironmentManagedActionInput,
    ApplyEnvironmentManagedActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ApplyEnvironmentManagedActionInput,
        ApplyEnvironmentManagedActionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
