import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAssociation } from "../model/operations/DescribeAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAssociationInput } from "../types/DescribeAssociationInput";
import { DescribeAssociationOutput } from "../types/DescribeAssociationOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeAssociationInput";
export * from "../types/DescribeAssociationOutput";
export * from "../types/DescribeAssociationExceptionsUnion";

export class DescribeAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAssociationInput,
      OutputTypesUnion,
      DescribeAssociationOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAssociationInput,
    DescribeAssociationOutput,
    Blob
  >();

  constructor(readonly input: DescribeAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAssociationInput,
    DescribeAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAssociationInput, DescribeAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
