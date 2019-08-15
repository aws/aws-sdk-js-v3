import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetGroupVersion } from "../model/operations/GetGroupVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupVersionInput } from "../types/GetGroupVersionInput";
import { GetGroupVersionOutput } from "../types/GetGroupVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetGroupVersionInput";
export * from "../types/GetGroupVersionOutput";
export * from "../types/GetGroupVersionExceptionsUnion";

export class GetGroupVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupVersionInput,
      OutputTypesUnion,
      GetGroupVersionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetGroupVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupVersionInput,
    GetGroupVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetGroupVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGroupVersionInput, GetGroupVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGroupVersionInput, GetGroupVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
