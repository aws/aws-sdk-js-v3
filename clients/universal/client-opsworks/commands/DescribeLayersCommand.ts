import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLayers } from "../model/DescribeLayers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLayersInput } from "../types/DescribeLayersInput";
import { DescribeLayersOutput } from "../types/DescribeLayersOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/DescribeLayersInput";
export * from "../types/DescribeLayersOutput";
export * from "../types/DescribeLayersExceptionsUnion";

export class DescribeLayersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLayersInput,
      OutputTypesUnion,
      DescribeLayersOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeLayers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLayersInput,
    DescribeLayersOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeLayersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeLayersInput, DescribeLayersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLayersInput, DescribeLayersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
