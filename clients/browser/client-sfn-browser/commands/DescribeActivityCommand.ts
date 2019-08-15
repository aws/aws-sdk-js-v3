import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeActivity } from "../model/operations/DescribeActivity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeActivityInput } from "../types/DescribeActivityInput";
import { DescribeActivityOutput } from "../types/DescribeActivityOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/DescribeActivityInput";
export * from "../types/DescribeActivityOutput";
export * from "../types/DescribeActivityExceptionsUnion";

export class DescribeActivityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeActivityInput,
      OutputTypesUnion,
      DescribeActivityOutput,
      SFNResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeActivity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeActivityInput,
    DescribeActivityOutput,
    Blob
  >();

  constructor(readonly input: DescribeActivityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeActivityInput, DescribeActivityOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeActivityInput, DescribeActivityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
