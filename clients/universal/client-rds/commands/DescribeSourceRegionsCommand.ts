import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSourceRegions } from "../model/DescribeSourceRegions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSourceRegionsInput } from "../types/DescribeSourceRegionsInput";
import { DescribeSourceRegionsOutput } from "../types/DescribeSourceRegionsOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/DescribeSourceRegionsInput";
export * from "../types/DescribeSourceRegionsOutput";
export * from "../types/DescribeSourceRegionsExceptionsUnion";

export class DescribeSourceRegionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSourceRegionsInput,
      OutputTypesUnion,
      DescribeSourceRegionsOutput,
      RDSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeSourceRegions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSourceRegionsInput,
    DescribeSourceRegionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeSourceRegionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSourceRegionsInput,
    DescribeSourceRegionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSourceRegionsInput, DescribeSourceRegionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
