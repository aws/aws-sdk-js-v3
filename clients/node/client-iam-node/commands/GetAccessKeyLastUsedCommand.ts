import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAccessKeyLastUsed } from "../model/GetAccessKeyLastUsed";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccessKeyLastUsedInput } from "../types/GetAccessKeyLastUsedInput";
import { GetAccessKeyLastUsedOutput } from "../types/GetAccessKeyLastUsedOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetAccessKeyLastUsedInput";
export * from "../types/GetAccessKeyLastUsedOutput";
export * from "../types/GetAccessKeyLastUsedExceptionsUnion";

export class GetAccessKeyLastUsedCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccessKeyLastUsedInput,
      OutputTypesUnion,
      GetAccessKeyLastUsedOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAccessKeyLastUsed;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccessKeyLastUsedInput,
    GetAccessKeyLastUsedOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAccessKeyLastUsedInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAccessKeyLastUsedInput,
    GetAccessKeyLastUsedOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAccessKeyLastUsedInput, GetAccessKeyLastUsedOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
