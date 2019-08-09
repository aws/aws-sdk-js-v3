import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSchema } from "../model/DescribeSchema";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSchemaInput } from "../types/DescribeSchemaInput";
import { DescribeSchemaOutput } from "../types/DescribeSchemaOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeSchemaInput";
export * from "../types/DescribeSchemaOutput";
export * from "../types/DescribeSchemaExceptionsUnion";

export class DescribeSchemaCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSchemaInput,
      OutputTypesUnion,
      DescribeSchemaOutput,
      PersonalizeResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSchema;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSchemaInput,
    DescribeSchemaOutput,
    Blob
  >();

  constructor(readonly input: DescribeSchemaInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeSchemaInput, DescribeSchemaOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSchemaInput, DescribeSchemaOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
