import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeContinuousExports } from "../model/DescribeContinuousExports";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeContinuousExportsInput } from "../types/DescribeContinuousExportsInput";
import { DescribeContinuousExportsOutput } from "../types/DescribeContinuousExportsOutput";
import { ApplicationDiscoveryServiceResolvedConfiguration } from "../ApplicationDiscoveryServiceConfiguration";
export * from "../types/DescribeContinuousExportsInput";
export * from "../types/DescribeContinuousExportsOutput";
export * from "../types/DescribeContinuousExportsExceptionsUnion";

export class DescribeContinuousExportsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeContinuousExportsInput,
      OutputTypesUnion,
      DescribeContinuousExportsOutput,
      ApplicationDiscoveryServiceResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeContinuousExports;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeContinuousExportsInput,
    DescribeContinuousExportsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeContinuousExportsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ApplicationDiscoveryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeContinuousExportsInput,
    DescribeContinuousExportsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeContinuousExportsInput, DescribeContinuousExportsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
