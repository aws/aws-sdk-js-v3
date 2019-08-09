import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLags } from "../model/DescribeLags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLagsInput } from "../types/DescribeLagsInput";
import { DescribeLagsOutput } from "../types/DescribeLagsOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeLagsInput";
export * from "../types/DescribeLagsOutput";
export * from "../types/DescribeLagsExceptionsUnion";

export class DescribeLagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLagsInput,
      OutputTypesUnion,
      DescribeLagsOutput,
      DirectConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLagsInput,
    DescribeLagsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeLagsInput, DescribeLagsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLagsInput, DescribeLagsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
