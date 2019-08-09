import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeProvisioningParameters } from "../model/DescribeProvisioningParameters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProvisioningParametersInput } from "../types/DescribeProvisioningParametersInput";
import { DescribeProvisioningParametersOutput } from "../types/DescribeProvisioningParametersOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProvisioningParametersInput";
export * from "../types/DescribeProvisioningParametersOutput";
export * from "../types/DescribeProvisioningParametersExceptionsUnion";

export class DescribeProvisioningParametersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProvisioningParametersInput,
      OutputTypesUnion,
      DescribeProvisioningParametersOutput,
      ServiceCatalogResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeProvisioningParameters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProvisioningParametersInput,
    DescribeProvisioningParametersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeProvisioningParametersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProvisioningParametersInput,
    DescribeProvisioningParametersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeProvisioningParametersInput,
        DescribeProvisioningParametersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
