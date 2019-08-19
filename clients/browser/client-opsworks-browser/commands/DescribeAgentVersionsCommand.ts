import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAgentVersions } from "../model/operations/DescribeAgentVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAgentVersionsInput } from "../types/DescribeAgentVersionsInput";
import { DescribeAgentVersionsOutput } from "../types/DescribeAgentVersionsOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeAgentVersionsInput";
export * from "../types/DescribeAgentVersionsOutput";
export * from "../types/DescribeAgentVersionsExceptionsUnion";

export class DescribeAgentVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAgentVersionsInput,
      OutputTypesUnion,
      DescribeAgentVersionsOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAgentVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAgentVersionsInput,
    DescribeAgentVersionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeAgentVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAgentVersionsInput,
    DescribeAgentVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAgentVersionsInput, DescribeAgentVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
