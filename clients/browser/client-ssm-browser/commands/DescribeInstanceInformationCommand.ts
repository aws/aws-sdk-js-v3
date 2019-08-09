import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeInstanceInformation } from "../model/DescribeInstanceInformation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstanceInformationInput } from "../types/DescribeInstanceInformationInput";
import { DescribeInstanceInformationOutput } from "../types/DescribeInstanceInformationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeInstanceInformationInput";
export * from "../types/DescribeInstanceInformationOutput";
export * from "../types/DescribeInstanceInformationExceptionsUnion";

export class DescribeInstanceInformationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstanceInformationInput,
      OutputTypesUnion,
      DescribeInstanceInformationOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeInstanceInformation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstanceInformationInput,
    DescribeInstanceInformationOutput,
    Blob
  >();

  constructor(readonly input: DescribeInstanceInformationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstanceInformationInput,
    DescribeInstanceInformationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeInstanceInformationInput,
        DescribeInstanceInformationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
