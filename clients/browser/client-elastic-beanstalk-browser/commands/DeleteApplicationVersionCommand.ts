import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteApplicationVersion } from "../model/DeleteApplicationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteApplicationVersionInput } from "../types/DeleteApplicationVersionInput";
import { DeleteApplicationVersionOutput } from "../types/DeleteApplicationVersionOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DeleteApplicationVersionInput";
export * from "../types/DeleteApplicationVersionOutput";
export * from "../types/DeleteApplicationVersionExceptionsUnion";

export class DeleteApplicationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteApplicationVersionInput,
      OutputTypesUnion,
      DeleteApplicationVersionOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteApplicationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteApplicationVersionInput,
    DeleteApplicationVersionOutput,
    Blob
  >();

  constructor(readonly input: DeleteApplicationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteApplicationVersionInput,
    DeleteApplicationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteApplicationVersionInput, DeleteApplicationVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
