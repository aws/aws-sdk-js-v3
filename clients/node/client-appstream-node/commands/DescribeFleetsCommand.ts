import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeFleets } from "../model/DescribeFleets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeFleetsInput } from "../types/DescribeFleetsInput";
import { DescribeFleetsOutput } from "../types/DescribeFleetsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeFleetsInput";
export * from "../types/DescribeFleetsOutput";
export * from "../types/DescribeFleetsExceptionsUnion";

export class DescribeFleetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeFleetsInput,
      OutputTypesUnion,
      DescribeFleetsOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeFleets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeFleetsInput,
    DescribeFleetsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeFleetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeFleetsInput, DescribeFleetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeFleetsInput, DescribeFleetsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
