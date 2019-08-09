import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLocations } from "../model/DescribeLocations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLocationsInput } from "../types/DescribeLocationsInput";
import { DescribeLocationsOutput } from "../types/DescribeLocationsOutput";
import { DirectConnectResolvedConfiguration } from "../DirectConnectConfiguration";
export * from "../types/DescribeLocationsInput";
export * from "../types/DescribeLocationsOutput";
export * from "../types/DescribeLocationsExceptionsUnion";

export class DescribeLocationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLocationsInput,
      OutputTypesUnion,
      DescribeLocationsOutput,
      DirectConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeLocations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLocationsInput,
    DescribeLocationsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeLocationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DirectConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeLocationsInput, DescribeLocationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLocationsInput, DescribeLocationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
