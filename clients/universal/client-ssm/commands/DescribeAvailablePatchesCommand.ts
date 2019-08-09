import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAvailablePatches } from "../model/DescribeAvailablePatches";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAvailablePatchesInput } from "../types/DescribeAvailablePatchesInput";
import { DescribeAvailablePatchesOutput } from "../types/DescribeAvailablePatchesOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeAvailablePatchesInput";
export * from "../types/DescribeAvailablePatchesOutput";
export * from "../types/DescribeAvailablePatchesExceptionsUnion";

export class DescribeAvailablePatchesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAvailablePatchesInput,
      OutputTypesUnion,
      DescribeAvailablePatchesOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeAvailablePatches;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAvailablePatchesInput,
    DescribeAvailablePatchesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeAvailablePatchesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeAvailablePatchesInput,
    DescribeAvailablePatchesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAvailablePatchesInput, DescribeAvailablePatchesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
