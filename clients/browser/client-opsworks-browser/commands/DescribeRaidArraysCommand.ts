import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeRaidArrays } from "../model/operations/DescribeRaidArrays";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeRaidArraysInput } from "../types/DescribeRaidArraysInput";
import { DescribeRaidArraysOutput } from "../types/DescribeRaidArraysOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeRaidArraysInput";
export * from "../types/DescribeRaidArraysOutput";
export * from "../types/DescribeRaidArraysExceptionsUnion";

export class DescribeRaidArraysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeRaidArraysInput,
      OutputTypesUnion,
      DescribeRaidArraysOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeRaidArrays;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeRaidArraysInput,
    DescribeRaidArraysOutput,
    Blob
  >();

  constructor(readonly input: DescribeRaidArraysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeRaidArraysInput,
    DescribeRaidArraysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeRaidArraysInput, DescribeRaidArraysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
