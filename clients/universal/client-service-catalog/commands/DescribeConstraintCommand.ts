import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeConstraint } from "../model/DescribeConstraint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeConstraintInput } from "../types/DescribeConstraintInput";
import { DescribeConstraintOutput } from "../types/DescribeConstraintOutput";
import { ServiceCatalogResolvedConfiguration } from "../ServiceCatalogConfiguration";
export * from "../types/DescribeConstraintInput";
export * from "../types/DescribeConstraintOutput";
export * from "../types/DescribeConstraintExceptionsUnion";

export class DescribeConstraintCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeConstraintInput,
      OutputTypesUnion,
      DescribeConstraintOutput,
      ServiceCatalogResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeConstraint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeConstraintInput,
    DescribeConstraintOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeConstraintInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServiceCatalogResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeConstraintInput,
    DescribeConstraintOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeConstraintInput, DescribeConstraintOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
