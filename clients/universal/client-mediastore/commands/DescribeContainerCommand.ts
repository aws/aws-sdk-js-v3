import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
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
      Uint8Array
    > {
  readonly model = DescribeContainer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeContainerInput,
    DescribeContainerOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeContainerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
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
