import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListUploads } from "../model/operations/ListUploads";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListUploadsInput } from "../types/ListUploadsInput";
import { ListUploadsOutput } from "../types/ListUploadsOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/ListUploadsInput";
export * from "../types/ListUploadsOutput";
export * from "../types/ListUploadsExceptionsUnion";

export class ListUploadsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListUploadsInput,
      OutputTypesUnion,
      ListUploadsOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListUploads;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListUploadsInput,
    ListUploadsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListUploadsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<ListUploadsInput, ListUploadsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListUploadsInput, ListUploadsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
