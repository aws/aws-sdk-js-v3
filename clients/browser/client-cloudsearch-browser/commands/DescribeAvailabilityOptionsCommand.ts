import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAvailabilityOptions } from "../model/DescribeAvailabilityOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAvailabilityOptionsInput } from "../types/DescribeAvailabilityOptionsInput";
import { DescribeAvailabilityOptionsOutput } from "../types/DescribeAvailabilityOptionsOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DescribeAvailabilityOptionsInput";
export * from "../types/DescribeAvailabilityOptionsOutput";
export * from "../types/DescribeAvailabilityOptionsExceptionsUnion";

export class DescribeAvailabilityOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAvailabilityOptionsInput,
      OutputTypesUnion,
      DescribeAvailabilityOptionsOutput,
      CloudSearchResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAvailabilityOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAvailabilityOptionsInput,
    DescribeAvailabilityOptionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeAvailabilityOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAvailabilityOptionsInput,
    DescribeAvailabilityOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeAvailabilityOptionsInput,
        DescribeAvailabilityOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
