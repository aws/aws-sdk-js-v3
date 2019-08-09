import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePatchGroupState } from "../model/DescribePatchGroupState";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePatchGroupStateInput } from "../types/DescribePatchGroupStateInput";
import { DescribePatchGroupStateOutput } from "../types/DescribePatchGroupStateOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribePatchGroupStateInput";
export * from "../types/DescribePatchGroupStateOutput";
export * from "../types/DescribePatchGroupStateExceptionsUnion";

export class DescribePatchGroupStateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePatchGroupStateInput,
      OutputTypesUnion,
      DescribePatchGroupStateOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribePatchGroupState;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePatchGroupStateInput,
    DescribePatchGroupStateOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribePatchGroupStateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePatchGroupStateInput,
    DescribePatchGroupStateOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePatchGroupStateInput, DescribePatchGroupStateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
