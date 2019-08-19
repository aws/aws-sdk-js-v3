import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePlatformVersion } from "../model/operations/DescribePlatformVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePlatformVersionInput } from "../types/DescribePlatformVersionInput";
import { DescribePlatformVersionOutput } from "../types/DescribePlatformVersionOutput";
import { ElasticBeanstalkResolvedConfiguration } from "../ElasticBeanstalkConfiguration";
export * from "../types/DescribePlatformVersionInput";
export * from "../types/DescribePlatformVersionOutput";
export * from "../types/DescribePlatformVersionExceptionsUnion";

export class DescribePlatformVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePlatformVersionInput,
      OutputTypesUnion,
      DescribePlatformVersionOutput,
      ElasticBeanstalkResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePlatformVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePlatformVersionInput,
    DescribePlatformVersionOutput,
    Blob
  >();

  constructor(readonly input: DescribePlatformVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticBeanstalkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePlatformVersionInput,
    DescribePlatformVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePlatformVersionInput, DescribePlatformVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
