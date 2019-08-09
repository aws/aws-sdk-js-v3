import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PublishLayerVersion } from "../model/PublishLayerVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PublishLayerVersionInput } from "../types/PublishLayerVersionInput";
import { PublishLayerVersionOutput } from "../types/PublishLayerVersionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/PublishLayerVersionInput";
export * from "../types/PublishLayerVersionOutput";
export * from "../types/PublishLayerVersionExceptionsUnion";

export class PublishLayerVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PublishLayerVersionInput,
      OutputTypesUnion,
      PublishLayerVersionOutput,
      LambdaResolvedConfiguration,
      Uint8Array
    > {
  readonly model = PublishLayerVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PublishLayerVersionInput,
    PublishLayerVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: PublishLayerVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PublishLayerVersionInput,
    PublishLayerVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PublishLayerVersionInput, PublishLayerVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
