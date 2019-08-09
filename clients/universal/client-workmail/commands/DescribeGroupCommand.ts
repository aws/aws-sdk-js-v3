import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeGroup } from "../model/DescribeGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeGroupInput } from "../types/DescribeGroupInput";
import { DescribeGroupOutput } from "../types/DescribeGroupOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/DescribeGroupInput";
export * from "../types/DescribeGroupOutput";
export * from "../types/DescribeGroupExceptionsUnion";

export class DescribeGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeGroupInput,
      OutputTypesUnion,
      DescribeGroupOutput,
      WorkMailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeGroupInput,
    DescribeGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeGroupInput, DescribeGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeGroupInput, DescribeGroupOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
