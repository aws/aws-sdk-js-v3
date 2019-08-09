import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeHub } from "../model/DescribeHub";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeHubInput } from "../types/DescribeHubInput";
import { DescribeHubOutput } from "../types/DescribeHubOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/DescribeHubInput";
export * from "../types/DescribeHubOutput";
export * from "../types/DescribeHubExceptionsUnion";

export class DescribeHubCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeHubInput,
      OutputTypesUnion,
      DescribeHubOutput,
      SecurityHubResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeHub;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeHubInput,
    DescribeHubOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeHubInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeHubInput, DescribeHubOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeHubInput, DescribeHubOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
