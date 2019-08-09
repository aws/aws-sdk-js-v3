import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAgent } from "../model/DescribeAgent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAgentInput } from "../types/DescribeAgentInput";
import { DescribeAgentOutput } from "../types/DescribeAgentOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DescribeAgentInput";
export * from "../types/DescribeAgentOutput";
export * from "../types/DescribeAgentExceptionsUnion";

export class DescribeAgentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAgentInput,
      OutputTypesUnion,
      DescribeAgentOutput,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAgent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAgentInput,
    DescribeAgentOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAgentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAgentInput, DescribeAgentOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAgentInput, DescribeAgentOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
