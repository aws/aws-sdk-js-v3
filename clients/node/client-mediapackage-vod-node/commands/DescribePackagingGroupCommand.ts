import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePackagingGroup } from "../model/DescribePackagingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePackagingGroupInput } from "../types/DescribePackagingGroupInput";
import { DescribePackagingGroupOutput } from "../types/DescribePackagingGroupOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/DescribePackagingGroupInput";
export * from "../types/DescribePackagingGroupOutput";
export * from "../types/DescribePackagingGroupExceptionsUnion";

export class DescribePackagingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePackagingGroupInput,
      OutputTypesUnion,
      DescribePackagingGroupOutput,
      MediaPackageVodResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePackagingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePackagingGroupInput,
    DescribePackagingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePackagingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePackagingGroupInput,
    DescribePackagingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePackagingGroupInput, DescribePackagingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
