import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClusterTracks } from "../model/DescribeClusterTracks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClusterTracksInput } from "../types/DescribeClusterTracksInput";
import { DescribeClusterTracksOutput } from "../types/DescribeClusterTracksOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/DescribeClusterTracksInput";
export * from "../types/DescribeClusterTracksOutput";
export * from "../types/DescribeClusterTracksExceptionsUnion";

export class DescribeClusterTracksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClusterTracksInput,
      OutputTypesUnion,
      DescribeClusterTracksOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeClusterTracks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClusterTracksInput,
    DescribeClusterTracksOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeClusterTracksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClusterTracksInput,
    DescribeClusterTracksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeClusterTracksInput, DescribeClusterTracksOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
