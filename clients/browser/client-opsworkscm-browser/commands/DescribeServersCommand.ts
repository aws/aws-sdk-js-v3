import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeServers } from "../model/operations/DescribeServers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeServersInput } from "../types/DescribeServersInput";
import { DescribeServersOutput } from "../types/DescribeServersOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/DescribeServersInput";
export * from "../types/DescribeServersOutput";
export * from "../types/DescribeServersExceptionsUnion";

export class DescribeServersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeServersInput,
      OutputTypesUnion,
      DescribeServersOutput,
      OpsWorksCMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeServers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeServersInput,
    DescribeServersOutput,
    Blob
  >();

  constructor(readonly input: DescribeServersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeServersInput, DescribeServersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeServersInput, DescribeServersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
