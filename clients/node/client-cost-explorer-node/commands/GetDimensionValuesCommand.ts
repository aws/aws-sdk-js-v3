import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDimensionValues } from "../model/GetDimensionValues";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDimensionValuesInput } from "../types/GetDimensionValuesInput";
import { GetDimensionValuesOutput } from "../types/GetDimensionValuesOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetDimensionValuesInput";
export * from "../types/GetDimensionValuesOutput";
export * from "../types/GetDimensionValuesExceptionsUnion";

export class GetDimensionValuesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDimensionValuesInput,
      OutputTypesUnion,
      GetDimensionValuesOutput,
      CostExplorerResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDimensionValues;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDimensionValuesInput,
    GetDimensionValuesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDimensionValuesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDimensionValuesInput,
    GetDimensionValuesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDimensionValuesInput, GetDimensionValuesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
