import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetUserDefinedFunction } from "../model/GetUserDefinedFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetUserDefinedFunctionInput } from "../types/GetUserDefinedFunctionInput";
import { GetUserDefinedFunctionOutput } from "../types/GetUserDefinedFunctionOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetUserDefinedFunctionInput";
export * from "../types/GetUserDefinedFunctionOutput";
export * from "../types/GetUserDefinedFunctionExceptionsUnion";

export class GetUserDefinedFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetUserDefinedFunctionInput,
      OutputTypesUnion,
      GetUserDefinedFunctionOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetUserDefinedFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetUserDefinedFunctionInput,
    GetUserDefinedFunctionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetUserDefinedFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetUserDefinedFunctionInput,
    GetUserDefinedFunctionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetUserDefinedFunctionInput, GetUserDefinedFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
