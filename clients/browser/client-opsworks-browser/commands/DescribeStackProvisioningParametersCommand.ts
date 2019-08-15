import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeStackProvisioningParameters } from "../model/operations/DescribeStackProvisioningParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeStackProvisioningParametersInput } from "../types/DescribeStackProvisioningParametersInput";
import { DescribeStackProvisioningParametersOutput } from "../types/DescribeStackProvisioningParametersOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeStackProvisioningParametersInput";
export * from "../types/DescribeStackProvisioningParametersOutput";
export * from "../types/DescribeStackProvisioningParametersExceptionsUnion";

export class DescribeStackProvisioningParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeStackProvisioningParametersInput,
      OutputTypesUnion,
      DescribeStackProvisioningParametersOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeStackProvisioningParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeStackProvisioningParametersInput,
    DescribeStackProvisioningParametersOutput,
    Blob
  >();

  constructor(readonly input: DescribeStackProvisioningParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeStackProvisioningParametersInput,
    DescribeStackProvisioningParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeStackProvisioningParametersInput,
        DescribeStackProvisioningParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
