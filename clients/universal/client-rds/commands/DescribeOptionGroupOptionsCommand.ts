import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeOptionGroupOptions } from "../model/DescribeOptionGroupOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeOptionGroupOptionsInput } from "../types/DescribeOptionGroupOptionsInput";
import { DescribeOptionGroupOptionsOutput } from "../types/DescribeOptionGroupOptionsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeOptionGroupOptionsInput";
export * from "../types/DescribeOptionGroupOptionsOutput";
export * from "../types/DescribeOptionGroupOptionsExceptionsUnion";

export class DescribeOptionGroupOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeOptionGroupOptionsInput,
      OutputTypesUnion,
      DescribeOptionGroupOptionsOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeOptionGroupOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeOptionGroupOptionsInput,
    DescribeOptionGroupOptionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeOptionGroupOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeOptionGroupOptionsInput,
    DescribeOptionGroupOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeOptionGroupOptionsInput,
        DescribeOptionGroupOptionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
