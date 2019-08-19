import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTableVersion } from "../model/operations/GetTableVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTableVersionInput } from "../types/GetTableVersionInput";
import { GetTableVersionOutput } from "../types/GetTableVersionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetTableVersionInput";
export * from "../types/GetTableVersionOutput";
export * from "../types/GetTableVersionExceptionsUnion";

export class GetTableVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTableVersionInput,
      OutputTypesUnion,
      GetTableVersionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTableVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTableVersionInput,
    GetTableVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTableVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTableVersionInput, GetTableVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTableVersionInput, GetTableVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
