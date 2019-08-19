import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateApplication } from "../model/operations/UpdateApplication";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateApplicationInput } from "../types/UpdateApplicationInput";
import { UpdateApplicationOutput } from "../types/UpdateApplicationOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/UpdateApplicationInput";
export * from "../types/UpdateApplicationOutput";
export * from "../types/UpdateApplicationExceptionsUnion";

export class UpdateApplicationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateApplicationInput,
      OutputTypesUnion,
      UpdateApplicationOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateApplication;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateApplicationInput,
    UpdateApplicationOutput,
    Blob
  >();

  constructor(readonly input: UpdateApplicationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateApplicationInput, UpdateApplicationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateApplicationInput, UpdateApplicationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
