import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListImages } from "../model/ListImages";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListImagesInput } from "../types/ListImagesInput";
import { ListImagesOutput } from "../types/ListImagesOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/ListImagesInput";
export * from "../types/ListImagesOutput";
export * from "../types/ListImagesExceptionsUnion";

export class ListImagesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListImagesInput,
      OutputTypesUnion,
      ListImagesOutput,
      ECRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListImages;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListImagesInput,
    ListImagesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListImagesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<ListImagesInput, ListImagesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListImagesInput, ListImagesOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
