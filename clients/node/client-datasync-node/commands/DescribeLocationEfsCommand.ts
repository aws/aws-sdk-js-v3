import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLocationEfs } from "../model/DescribeLocationEfs";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLocationEfsInput } from "../types/DescribeLocationEfsInput";
import { DescribeLocationEfsOutput } from "../types/DescribeLocationEfsOutput";
import { DataSyncResolvedConfiguration } from "../DataSyncConfiguration";
export * from "../types/DescribeLocationEfsInput";
export * from "../types/DescribeLocationEfsOutput";
export * from "../types/DescribeLocationEfsExceptionsUnion";

export class DescribeLocationEfsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLocationEfsInput,
      OutputTypesUnion,
      DescribeLocationEfsOutput,
      DataSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeLocationEfs;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLocationEfsInput,
    DescribeLocationEfsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLocationEfsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DataSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLocationEfsInput,
    DescribeLocationEfsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLocationEfsInput, DescribeLocationEfsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
