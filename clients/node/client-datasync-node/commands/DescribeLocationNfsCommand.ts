import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLocationNfs } from "../model/operations/DescribeLocationNfs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLocationNfsInput } from "../types/DescribeLocationNfsInput";
import { DescribeLocationNfsOutput } from "../types/DescribeLocationNfsOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DescribeLocationNfsInput";
export * from "../types/DescribeLocationNfsOutput";
export * from "../types/DescribeLocationNfsExceptionsUnion";

export class DescribeLocationNfsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLocationNfsInput,
      OutputTypesUnion,
      DescribeLocationNfsOutput,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLocationNfs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLocationNfsInput,
    DescribeLocationNfsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLocationNfsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLocationNfsInput,
    DescribeLocationNfsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLocationNfsInput, DescribeLocationNfsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
