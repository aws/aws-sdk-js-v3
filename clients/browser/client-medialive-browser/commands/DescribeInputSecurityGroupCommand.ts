import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeInputSecurityGroup } from "../model/DescribeInputSecurityGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInputSecurityGroupInput } from "../types/DescribeInputSecurityGroupInput";
import { DescribeInputSecurityGroupOutput } from "../types/DescribeInputSecurityGroupOutput";
import { MediaLiveResolvedConfiguration } from "../MediaLiveConfiguration";
export * from "../types/DescribeInputSecurityGroupInput";
export * from "../types/DescribeInputSecurityGroupOutput";
export * from "../types/DescribeInputSecurityGroupExceptionsUnion";

export class DescribeInputSecurityGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInputSecurityGroupInput,
      OutputTypesUnion,
      DescribeInputSecurityGroupOutput,
      MediaLiveResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeInputSecurityGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInputSecurityGroupInput,
    DescribeInputSecurityGroupOutput,
    Blob
  >();

  constructor(readonly input: DescribeInputSecurityGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaLiveResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInputSecurityGroupInput,
    DescribeInputSecurityGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeInputSecurityGroupInput,
        DescribeInputSecurityGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
