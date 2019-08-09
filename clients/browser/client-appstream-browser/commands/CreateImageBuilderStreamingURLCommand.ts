import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateImageBuilderStreamingURL } from "../model/CreateImageBuilderStreamingURL";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateImageBuilderStreamingURLInput } from "../types/CreateImageBuilderStreamingURLInput";
import { CreateImageBuilderStreamingURLOutput } from "../types/CreateImageBuilderStreamingURLOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/CreateImageBuilderStreamingURLInput";
export * from "../types/CreateImageBuilderStreamingURLOutput";
export * from "../types/CreateImageBuilderStreamingURLExceptionsUnion";

export class CreateImageBuilderStreamingURLCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateImageBuilderStreamingURLInput,
      OutputTypesUnion,
      CreateImageBuilderStreamingURLOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = CreateImageBuilderStreamingURL;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateImageBuilderStreamingURLInput,
    CreateImageBuilderStreamingURLOutput,
    Blob
  >();

  constructor(readonly input: CreateImageBuilderStreamingURLInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateImageBuilderStreamingURLInput,
    CreateImageBuilderStreamingURLOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateImageBuilderStreamingURLInput,
        CreateImageBuilderStreamingURLOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
