import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeTrafficMirrorFilters } from "../model/DescribeTrafficMirrorFilters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeTrafficMirrorFiltersInput } from "../types/DescribeTrafficMirrorFiltersInput";
import { DescribeTrafficMirrorFiltersOutput } from "../types/DescribeTrafficMirrorFiltersOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeTrafficMirrorFiltersInput";
export * from "../types/DescribeTrafficMirrorFiltersOutput";
export * from "../types/DescribeTrafficMirrorFiltersExceptionsUnion";

export class DescribeTrafficMirrorFiltersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeTrafficMirrorFiltersInput,
      OutputTypesUnion,
      DescribeTrafficMirrorFiltersOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeTrafficMirrorFilters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeTrafficMirrorFiltersInput,
    DescribeTrafficMirrorFiltersOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeTrafficMirrorFiltersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeTrafficMirrorFiltersInput,
    DescribeTrafficMirrorFiltersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeTrafficMirrorFiltersInput,
        DescribeTrafficMirrorFiltersOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
