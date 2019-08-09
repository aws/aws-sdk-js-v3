import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeInstancePatchStatesForPatchGroup } from "../model/DescribeInstancePatchStatesForPatchGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstancePatchStatesForPatchGroupInput } from "../types/DescribeInstancePatchStatesForPatchGroupInput";
import { DescribeInstancePatchStatesForPatchGroupOutput } from "../types/DescribeInstancePatchStatesForPatchGroupOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeInstancePatchStatesForPatchGroupInput";
export * from "../types/DescribeInstancePatchStatesForPatchGroupOutput";
export * from "../types/DescribeInstancePatchStatesForPatchGroupExceptionsUnion";

export class DescribeInstancePatchStatesForPatchGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstancePatchStatesForPatchGroupInput,
      OutputTypesUnion,
      DescribeInstancePatchStatesForPatchGroupOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeInstancePatchStatesForPatchGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstancePatchStatesForPatchGroupInput,
    DescribeInstancePatchStatesForPatchGroupOutput,
    Blob
  >();

  constructor(readonly input: DescribeInstancePatchStatesForPatchGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstancePatchStatesForPatchGroupInput,
    DescribeInstancePatchStatesForPatchGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeInstancePatchStatesForPatchGroupInput,
        DescribeInstancePatchStatesForPatchGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
