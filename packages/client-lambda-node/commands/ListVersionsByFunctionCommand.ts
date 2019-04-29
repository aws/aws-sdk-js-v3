import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListVersionsByFunction } from "../model/ListVersionsByFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVersionsByFunctionInput } from "../types/ListVersionsByFunctionInput";
import { ListVersionsByFunctionOutput } from "../types/ListVersionsByFunctionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/ListVersionsByFunctionInput";
export * from "../types/ListVersionsByFunctionOutput";
export * from "../types/ListVersionsByFunctionExceptionsUnion";

export class ListVersionsByFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVersionsByFunctionInput,
      OutputTypesUnion,
      ListVersionsByFunctionOutput,
      LambdaResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVersionsByFunctionInput,
    ListVersionsByFunctionOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListVersionsByFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVersionsByFunctionInput,
    ListVersionsByFunctionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: ListVersionsByFunction
    };

    return stack.resolve(
      handler<ListVersionsByFunctionInput, ListVersionsByFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
