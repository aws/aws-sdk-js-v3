import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClassicLinkInstances } from "../model/DescribeClassicLinkInstances";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClassicLinkInstancesInput } from "../types/DescribeClassicLinkInstancesInput";
import { DescribeClassicLinkInstancesOutput } from "../types/DescribeClassicLinkInstancesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeClassicLinkInstancesInput";
export * from "../types/DescribeClassicLinkInstancesOutput";
export * from "../types/DescribeClassicLinkInstancesExceptionsUnion";

export class DescribeClassicLinkInstancesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClassicLinkInstancesInput,
      OutputTypesUnion,
      DescribeClassicLinkInstancesOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeClassicLinkInstances;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClassicLinkInstancesInput,
    DescribeClassicLinkInstancesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeClassicLinkInstancesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClassicLinkInstancesInput,
    DescribeClassicLinkInstancesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClassicLinkInstancesInput,
        DescribeClassicLinkInstancesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
