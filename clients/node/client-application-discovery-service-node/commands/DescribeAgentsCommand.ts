import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeAgents } from "../model/DescribeAgents";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAgentsInput } from "../types/DescribeAgentsInput";
import { DescribeAgentsOutput } from "../types/DescribeAgentsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/DescribeAgentsInput";
export * from "../types/DescribeAgentsOutput";
export * from "../types/DescribeAgentsExceptionsUnion";

export class DescribeAgentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAgentsInput,
      OutputTypesUnion,
      DescribeAgentsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeAgents;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAgentsInput,
    DescribeAgentsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeAgentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAgentsInput, DescribeAgentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAgentsInput, DescribeAgentsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
