import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCommands } from "../model/DescribeCommands";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCommandsInput } from "../types/DescribeCommandsInput";
import { DescribeCommandsOutput } from "../types/DescribeCommandsOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeCommandsInput";
export * from "../types/DescribeCommandsOutput";
export * from "../types/DescribeCommandsExceptionsUnion";

export class DescribeCommandsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCommandsInput,
      OutputTypesUnion,
      DescribeCommandsOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeCommands;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCommandsInput,
    DescribeCommandsOutput,
    Blob
  >();

  constructor(readonly input: DescribeCommandsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeCommandsInput, DescribeCommandsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCommandsInput, DescribeCommandsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
