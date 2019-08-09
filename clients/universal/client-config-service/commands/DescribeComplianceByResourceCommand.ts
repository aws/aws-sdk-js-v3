import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeComplianceByResource } from "../model/DescribeComplianceByResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeComplianceByResourceInput } from "../types/DescribeComplianceByResourceInput";
import { DescribeComplianceByResourceOutput } from "../types/DescribeComplianceByResourceOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/DescribeComplianceByResourceInput";
export * from "../types/DescribeComplianceByResourceOutput";
export * from "../types/DescribeComplianceByResourceExceptionsUnion";

export class DescribeComplianceByResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeComplianceByResourceInput,
      OutputTypesUnion,
      DescribeComplianceByResourceOutput,
      ConfigServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeComplianceByResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeComplianceByResourceInput,
    DescribeComplianceByResourceOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeComplianceByResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeComplianceByResourceInput,
    DescribeComplianceByResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeComplianceByResourceInput,
        DescribeComplianceByResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
