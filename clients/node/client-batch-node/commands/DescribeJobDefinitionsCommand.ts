import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeJobDefinitions } from "../model/operations/DescribeJobDefinitions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeJobDefinitionsInput } from "../types/DescribeJobDefinitionsInput";
import { DescribeJobDefinitionsOutput } from "../types/DescribeJobDefinitionsOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/DescribeJobDefinitionsInput";
export * from "../types/DescribeJobDefinitionsOutput";
export * from "../types/DescribeJobDefinitionsExceptionsUnion";

export class DescribeJobDefinitionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeJobDefinitionsInput,
      OutputTypesUnion,
      DescribeJobDefinitionsOutput,
      BatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeJobDefinitions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeJobDefinitionsInput,
    DescribeJobDefinitionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeJobDefinitionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeJobDefinitionsInput,
    DescribeJobDefinitionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeJobDefinitionsInput, DescribeJobDefinitionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
