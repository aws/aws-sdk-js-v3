import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeContainer } from "../model/DescribeContainer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeContainerInput } from "../types/DescribeContainerInput";
import { DescribeContainerOutput } from "../types/DescribeContainerOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/DescribeContainerInput";
export * from "../types/DescribeContainerOutput";
export * from "../types/DescribeContainerExceptionsUnion";

export class DescribeContainerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeContainerInput,
      OutputTypesUnion,
      DescribeContainerOutput,
      MediaStoreResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeContainer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeContainerInput,
    DescribeContainerOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeContainerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeContainerInput, DescribeContainerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeContainerInput, DescribeContainerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
