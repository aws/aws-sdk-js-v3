import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateApplicationResourceLifecycle } from "../model/UpdateApplicationResourceLifecycle";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApplicationResourceLifecycleInput } from "../types/UpdateApplicationResourceLifecycleInput";
import { UpdateApplicationResourceLifecycleOutput } from "../types/UpdateApplicationResourceLifecycleOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/UpdateApplicationResourceLifecycleInput";
export * from "../types/UpdateApplicationResourceLifecycleOutput";
export * from "../types/UpdateApplicationResourceLifecycleExceptionsUnion";

export class UpdateApplicationResourceLifecycleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApplicationResourceLifecycleInput,
      OutputTypesUnion,
      UpdateApplicationResourceLifecycleOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateApplicationResourceLifecycle;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApplicationResourceLifecycleInput,
    UpdateApplicationResourceLifecycleOutput,
    Blob
  >();

  constructor(readonly input: UpdateApplicationResourceLifecycleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateApplicationResourceLifecycleInput,
    UpdateApplicationResourceLifecycleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateApplicationResourceLifecycleInput,
        UpdateApplicationResourceLifecycleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
