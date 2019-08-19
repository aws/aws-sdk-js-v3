import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateApplicationVersion } from "../model/operations/CreateApplicationVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateApplicationVersionInput } from "../types/CreateApplicationVersionInput";
import { CreateApplicationVersionOutput } from "../types/CreateApplicationVersionOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/CreateApplicationVersionInput";
export * from "../types/CreateApplicationVersionOutput";
export * from "../types/CreateApplicationVersionExceptionsUnion";

export class CreateApplicationVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateApplicationVersionInput,
      OutputTypesUnion,
      CreateApplicationVersionOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = CreateApplicationVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateApplicationVersionInput,
    CreateApplicationVersionOutput,
    Blob
  >();

  constructor(readonly input: CreateApplicationVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateApplicationVersionInput,
    CreateApplicationVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateApplicationVersionInput, CreateApplicationVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
