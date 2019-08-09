import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAssociationExecutions } from "../model/DescribeAssociationExecutions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAssociationExecutionsInput } from "../types/DescribeAssociationExecutionsInput";
import { DescribeAssociationExecutionsOutput } from "../types/DescribeAssociationExecutionsOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeAssociationExecutionsInput";
export * from "../types/DescribeAssociationExecutionsOutput";
export * from "../types/DescribeAssociationExecutionsExceptionsUnion";

export class DescribeAssociationExecutionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAssociationExecutionsInput,
      OutputTypesUnion,
      DescribeAssociationExecutionsOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAssociationExecutions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAssociationExecutionsInput,
    DescribeAssociationExecutionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAssociationExecutionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAssociationExecutionsInput,
    DescribeAssociationExecutionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAssociationExecutionsInput,
        DescribeAssociationExecutionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
