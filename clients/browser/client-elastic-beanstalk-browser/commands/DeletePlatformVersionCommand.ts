import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeletePlatformVersion } from "../model/DeletePlatformVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeletePlatformVersionInput } from "../types/DeletePlatformVersionInput";
import { DeletePlatformVersionOutput } from "../types/DeletePlatformVersionOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DeletePlatformVersionInput";
export * from "../types/DeletePlatformVersionOutput";
export * from "../types/DeletePlatformVersionExceptionsUnion";

export class DeletePlatformVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeletePlatformVersionInput,
      OutputTypesUnion,
      DeletePlatformVersionOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = DeletePlatformVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeletePlatformVersionInput,
    DeletePlatformVersionOutput,
    Blob
  >();

  constructor(readonly input: DeletePlatformVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeletePlatformVersionInput,
    DeletePlatformVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeletePlatformVersionInput, DeletePlatformVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
