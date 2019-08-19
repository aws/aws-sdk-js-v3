import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePlatformVersion } from "../model/operations/CreatePlatformVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePlatformVersionInput } from "../types/CreatePlatformVersionInput";
import { CreatePlatformVersionOutput } from "../types/CreatePlatformVersionOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/CreatePlatformVersionInput";
export * from "../types/CreatePlatformVersionOutput";
export * from "../types/CreatePlatformVersionExceptionsUnion";

export class CreatePlatformVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePlatformVersionInput,
      OutputTypesUnion,
      CreatePlatformVersionOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePlatformVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePlatformVersionInput,
    CreatePlatformVersionOutput,
    Blob
  >();

  constructor(readonly input: CreatePlatformVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePlatformVersionInput,
    CreatePlatformVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePlatformVersionInput, CreatePlatformVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
