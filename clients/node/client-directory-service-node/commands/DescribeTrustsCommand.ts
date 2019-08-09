import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTrusts } from "../model/DescribeTrusts";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrustsInput } from "../types/DescribeTrustsInput";
import { DescribeTrustsOutput } from "../types/DescribeTrustsOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DescribeTrustsInput";
export * from "../types/DescribeTrustsOutput";
export * from "../types/DescribeTrustsExceptionsUnion";

export class DescribeTrustsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrustsInput,
      OutputTypesUnion,
      DescribeTrustsOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTrusts;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrustsInput,
    DescribeTrustsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTrustsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeTrustsInput, DescribeTrustsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeTrustsInput, DescribeTrustsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
