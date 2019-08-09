import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListMultipartUploads } from "../model/ListMultipartUploads";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListMultipartUploadsInput } from "../types/ListMultipartUploadsInput";
import { ListMultipartUploadsOutput } from "../types/ListMultipartUploadsOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/ListMultipartUploadsInput";
export * from "../types/ListMultipartUploadsOutput";
export * from "../types/ListMultipartUploadsExceptionsUnion";

export class ListMultipartUploadsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListMultipartUploadsInput,
      OutputTypesUnion,
      ListMultipartUploadsOutput,
      GlacierResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListMultipartUploads;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListMultipartUploadsInput,
    ListMultipartUploadsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListMultipartUploadsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListMultipartUploadsInput,
    ListMultipartUploadsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListMultipartUploadsInput, ListMultipartUploadsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
