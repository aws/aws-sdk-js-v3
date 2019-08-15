import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeIamInstanceProfileAssociations } from "../model/operations/DescribeIamInstanceProfileAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeIamInstanceProfileAssociationsInput } from "../types/DescribeIamInstanceProfileAssociationsInput";
import { DescribeIamInstanceProfileAssociationsOutput } from "../types/DescribeIamInstanceProfileAssociationsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeIamInstanceProfileAssociationsInput";
export * from "../types/DescribeIamInstanceProfileAssociationsOutput";
export * from "../types/DescribeIamInstanceProfileAssociationsExceptionsUnion";

export class DescribeIamInstanceProfileAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeIamInstanceProfileAssociationsInput,
      OutputTypesUnion,
      DescribeIamInstanceProfileAssociationsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeIamInstanceProfileAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeIamInstanceProfileAssociationsInput,
    DescribeIamInstanceProfileAssociationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeIamInstanceProfileAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeIamInstanceProfileAssociationsInput,
    DescribeIamInstanceProfileAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeIamInstanceProfileAssociationsInput,
        DescribeIamInstanceProfileAssociationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
