import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeThingType } from "../model/DescribeThingType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeThingTypeInput } from "../types/DescribeThingTypeInput";
import { DescribeThingTypeOutput } from "../types/DescribeThingTypeOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeThingTypeInput";
export * from "../types/DescribeThingTypeOutput";
export * from "../types/DescribeThingTypeExceptionsUnion";

export class DescribeThingTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeThingTypeInput,
      OutputTypesUnion,
      DescribeThingTypeOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeThingType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeThingTypeInput,
    DescribeThingTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeThingTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeThingTypeInput, DescribeThingTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeThingTypeInput, DescribeThingTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
