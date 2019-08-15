import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeEC2InstanceLimits } from "../model/operations/DescribeEC2InstanceLimits";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeEC2InstanceLimitsInput } from "../types/DescribeEC2InstanceLimitsInput";
import { DescribeEC2InstanceLimitsOutput } from "../types/DescribeEC2InstanceLimitsOutput";
import { GameLiftResolvedConfiguration } from "../GameLiftConfiguration";
export * from "../types/DescribeEC2InstanceLimitsInput";
export * from "../types/DescribeEC2InstanceLimitsOutput";
export * from "../types/DescribeEC2InstanceLimitsExceptionsUnion";

export class DescribeEC2InstanceLimitsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeEC2InstanceLimitsInput,
      OutputTypesUnion,
      DescribeEC2InstanceLimitsOutput,
      GameLiftResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeEC2InstanceLimits;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeEC2InstanceLimitsInput,
    DescribeEC2InstanceLimitsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeEC2InstanceLimitsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GameLiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeEC2InstanceLimitsInput,
    DescribeEC2InstanceLimitsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeEC2InstanceLimitsInput, DescribeEC2InstanceLimitsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
