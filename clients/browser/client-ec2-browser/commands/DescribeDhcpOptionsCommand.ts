import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDhcpOptions } from "../model/DescribeDhcpOptions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDhcpOptionsInput } from "../types/DescribeDhcpOptionsInput";
import { DescribeDhcpOptionsOutput } from "../types/DescribeDhcpOptionsOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeDhcpOptionsInput";
export * from "../types/DescribeDhcpOptionsOutput";
export * from "../types/DescribeDhcpOptionsExceptionsUnion";

export class DescribeDhcpOptionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDhcpOptionsInput,
      OutputTypesUnion,
      DescribeDhcpOptionsOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDhcpOptions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDhcpOptionsInput,
    DescribeDhcpOptionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeDhcpOptionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDhcpOptionsInput,
    DescribeDhcpOptionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDhcpOptionsInput, DescribeDhcpOptionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
