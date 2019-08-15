import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSecurityGroupReferences } from "../model/operations/DescribeSecurityGroupReferences";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSecurityGroupReferencesInput } from "../types/DescribeSecurityGroupReferencesInput";
import { DescribeSecurityGroupReferencesOutput } from "../types/DescribeSecurityGroupReferencesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeSecurityGroupReferencesInput";
export * from "../types/DescribeSecurityGroupReferencesOutput";
export * from "../types/DescribeSecurityGroupReferencesExceptionsUnion";

export class DescribeSecurityGroupReferencesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSecurityGroupReferencesInput,
      OutputTypesUnion,
      DescribeSecurityGroupReferencesOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSecurityGroupReferences;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSecurityGroupReferencesInput,
    DescribeSecurityGroupReferencesOutput,
    Blob
  >();

  constructor(readonly input: DescribeSecurityGroupReferencesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSecurityGroupReferencesInput,
    DescribeSecurityGroupReferencesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeSecurityGroupReferencesInput,
        DescribeSecurityGroupReferencesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
