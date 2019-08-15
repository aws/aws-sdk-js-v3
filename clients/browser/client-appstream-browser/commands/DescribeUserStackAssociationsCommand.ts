import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUserStackAssociations } from "../model/operations/DescribeUserStackAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUserStackAssociationsInput } from "../types/DescribeUserStackAssociationsInput";
import { DescribeUserStackAssociationsOutput } from "../types/DescribeUserStackAssociationsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeUserStackAssociationsInput";
export * from "../types/DescribeUserStackAssociationsOutput";
export * from "../types/DescribeUserStackAssociationsExceptionsUnion";

export class DescribeUserStackAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUserStackAssociationsInput,
      OutputTypesUnion,
      DescribeUserStackAssociationsOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUserStackAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUserStackAssociationsInput,
    DescribeUserStackAssociationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeUserStackAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeUserStackAssociationsInput,
    DescribeUserStackAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeUserStackAssociationsInput,
        DescribeUserStackAssociationsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
