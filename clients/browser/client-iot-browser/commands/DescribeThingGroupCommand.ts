import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeThingGroup } from "../model/DescribeThingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeThingGroupInput } from "../types/DescribeThingGroupInput";
import { DescribeThingGroupOutput } from "../types/DescribeThingGroupOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeThingGroupInput";
export * from "../types/DescribeThingGroupOutput";
export * from "../types/DescribeThingGroupExceptionsUnion";

export class DescribeThingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeThingGroupInput,
      OutputTypesUnion,
      DescribeThingGroupOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeThingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeThingGroupInput,
    DescribeThingGroupOutput,
    Blob
  >();

  constructor(readonly input: DescribeThingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeThingGroupInput,
    DescribeThingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeThingGroupInput, DescribeThingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
