import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListCompatibleImages } from "../model/ListCompatibleImages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListCompatibleImagesInput } from "../types/ListCompatibleImagesInput";
import { ListCompatibleImagesOutput } from "../types/ListCompatibleImagesOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/ListCompatibleImagesInput";
export * from "../types/ListCompatibleImagesOutput";
export * from "../types/ListCompatibleImagesExceptionsUnion";

export class ListCompatibleImagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListCompatibleImagesInput,
      OutputTypesUnion,
      ListCompatibleImagesOutput,
      SnowballResolvedConfiguration,
      Blob
    > {
  readonly model = ListCompatibleImages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListCompatibleImagesInput,
    ListCompatibleImagesOutput,
    Blob
  >();

  constructor(readonly input: ListCompatibleImagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListCompatibleImagesInput,
    ListCompatibleImagesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListCompatibleImagesInput, ListCompatibleImagesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
