import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSourceRegions } from "../model/operations/DescribeSourceRegions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSourceRegionsInput } from "../types/DescribeSourceRegionsInput";
import { DescribeSourceRegionsOutput } from "../types/DescribeSourceRegionsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeSourceRegionsInput";
export * from "../types/DescribeSourceRegionsOutput";
export * from "../types/DescribeSourceRegionsExceptionsUnion";

export class DescribeSourceRegionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSourceRegionsInput,
      OutputTypesUnion,
      DescribeSourceRegionsOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSourceRegions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSourceRegionsInput,
    DescribeSourceRegionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSourceRegionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSourceRegionsInput,
    DescribeSourceRegionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSourceRegionsInput, DescribeSourceRegionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
