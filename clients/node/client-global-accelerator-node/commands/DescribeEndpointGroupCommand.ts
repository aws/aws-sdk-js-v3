import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEndpointGroup } from "../model/operations/DescribeEndpointGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEndpointGroupInput } from "../types/DescribeEndpointGroupInput";
import { DescribeEndpointGroupOutput } from "../types/DescribeEndpointGroupOutput";
import { GlobalAcceleratorResolvedConfiguration } from "../GlobalAcceleratorConfiguration";
export * from "../types/DescribeEndpointGroupInput";
export * from "../types/DescribeEndpointGroupOutput";
export * from "../types/DescribeEndpointGroupExceptionsUnion";

export class DescribeEndpointGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEndpointGroupInput,
      OutputTypesUnion,
      DescribeEndpointGroupOutput,
      GlobalAcceleratorResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEndpointGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEndpointGroupInput,
    DescribeEndpointGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEndpointGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlobalAcceleratorResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEndpointGroupInput,
    DescribeEndpointGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEndpointGroupInput, DescribeEndpointGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
