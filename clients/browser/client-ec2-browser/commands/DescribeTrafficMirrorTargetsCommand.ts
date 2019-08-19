import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeTrafficMirrorTargets } from "../model/operations/DescribeTrafficMirrorTargets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrafficMirrorTargetsInput } from "../types/DescribeTrafficMirrorTargetsInput";
import { DescribeTrafficMirrorTargetsOutput } from "../types/DescribeTrafficMirrorTargetsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeTrafficMirrorTargetsInput";
export * from "../types/DescribeTrafficMirrorTargetsOutput";
export * from "../types/DescribeTrafficMirrorTargetsExceptionsUnion";

export class DescribeTrafficMirrorTargetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrafficMirrorTargetsInput,
      OutputTypesUnion,
      DescribeTrafficMirrorTargetsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeTrafficMirrorTargets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrafficMirrorTargetsInput,
    DescribeTrafficMirrorTargetsOutput,
    Blob
  >();

  constructor(readonly input: DescribeTrafficMirrorTargetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTrafficMirrorTargetsInput,
    DescribeTrafficMirrorTargetsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTrafficMirrorTargetsInput,
        DescribeTrafficMirrorTargetsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
