import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeContainerInstances } from "../model/operations/DescribeContainerInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeContainerInstancesInput } from "../types/DescribeContainerInstancesInput";
import { DescribeContainerInstancesOutput } from "../types/DescribeContainerInstancesOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DescribeContainerInstancesInput";
export * from "../types/DescribeContainerInstancesOutput";
export * from "../types/DescribeContainerInstancesExceptionsUnion";

export class DescribeContainerInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeContainerInstancesInput,
      OutputTypesUnion,
      DescribeContainerInstancesOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeContainerInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeContainerInstancesInput,
    DescribeContainerInstancesOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeContainerInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeContainerInstancesInput,
    DescribeContainerInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeContainerInstancesInput,
        DescribeContainerInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
