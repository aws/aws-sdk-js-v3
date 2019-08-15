import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeContact } from "../model/operations/DescribeContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeContactInput } from "../types/DescribeContactInput";
import { DescribeContactOutput } from "../types/DescribeContactOutput";
import { GroundStationResolvedConfiguration } from "../GroundStationConfiguration";
export * from "../types/DescribeContactInput";
export * from "../types/DescribeContactOutput";
export * from "../types/DescribeContactExceptionsUnion";

export class DescribeContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeContactInput,
      OutputTypesUnion,
      DescribeContactOutput,
      GroundStationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeContactInput,
    DescribeContactOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GroundStationResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeContactInput, DescribeContactOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeContactInput, DescribeContactOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
