import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDBClusterBacktracks } from "../model/DescribeDBClusterBacktracks";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDBClusterBacktracksInput } from "../types/DescribeDBClusterBacktracksInput";
import { DescribeDBClusterBacktracksOutput } from "../types/DescribeDBClusterBacktracksOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeDBClusterBacktracksInput";
export * from "../types/DescribeDBClusterBacktracksOutput";
export * from "../types/DescribeDBClusterBacktracksExceptionsUnion";

export class DescribeDBClusterBacktracksCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDBClusterBacktracksInput,
      OutputTypesUnion,
      DescribeDBClusterBacktracksOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDBClusterBacktracks;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDBClusterBacktracksInput,
    DescribeDBClusterBacktracksOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDBClusterBacktracksInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDBClusterBacktracksInput,
    DescribeDBClusterBacktracksOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDBClusterBacktracksInput,
        DescribeDBClusterBacktracksOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
