import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeThing } from "../model/DescribeThing";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeThingInput } from "../types/DescribeThingInput";
import { DescribeThingOutput } from "../types/DescribeThingOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeThingInput";
export * from "../types/DescribeThingOutput";
export * from "../types/DescribeThingExceptionsUnion";

export class DescribeThingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeThingInput,
      OutputTypesUnion,
      DescribeThingOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeThing;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeThingInput,
    DescribeThingOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeThingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeThingInput, DescribeThingOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeThingInput, DescribeThingOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
