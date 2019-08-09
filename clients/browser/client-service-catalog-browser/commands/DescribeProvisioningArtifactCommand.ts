import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProvisioningArtifact } from "../model/DescribeProvisioningArtifact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProvisioningArtifactInput } from "../types/DescribeProvisioningArtifactInput";
import { DescribeProvisioningArtifactOutput } from "../types/DescribeProvisioningArtifactOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeProvisioningArtifactInput";
export * from "../types/DescribeProvisioningArtifactOutput";
export * from "../types/DescribeProvisioningArtifactExceptionsUnion";

export class DescribeProvisioningArtifactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProvisioningArtifactInput,
      OutputTypesUnion,
      DescribeProvisioningArtifactOutput,
      ServiceCatalogResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeProvisioningArtifact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProvisioningArtifactInput,
    DescribeProvisioningArtifactOutput,
    Blob
  >();

  constructor(readonly input: DescribeProvisioningArtifactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProvisioningArtifactInput,
    DescribeProvisioningArtifactOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeProvisioningArtifactInput,
        DescribeProvisioningArtifactOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
