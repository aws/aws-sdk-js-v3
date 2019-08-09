import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeInstanceAssociationsStatus } from "../model/DescribeInstanceAssociationsStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeInstanceAssociationsStatusInput } from "../types/DescribeInstanceAssociationsStatusInput";
import { DescribeInstanceAssociationsStatusOutput } from "../types/DescribeInstanceAssociationsStatusOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeInstanceAssociationsStatusInput";
export * from "../types/DescribeInstanceAssociationsStatusOutput";
export * from "../types/DescribeInstanceAssociationsStatusExceptionsUnion";

export class DescribeInstanceAssociationsStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeInstanceAssociationsStatusInput,
      OutputTypesUnion,
      DescribeInstanceAssociationsStatusOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeInstanceAssociationsStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeInstanceAssociationsStatusInput,
    DescribeInstanceAssociationsStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeInstanceAssociationsStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeInstanceAssociationsStatusInput,
    DescribeInstanceAssociationsStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeInstanceAssociationsStatusInput,
        DescribeInstanceAssociationsStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
