import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeLunaClient } from "../model/DescribeLunaClient";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLunaClientInput } from "../types/DescribeLunaClientInput";
import { DescribeLunaClientOutput } from "../types/DescribeLunaClientOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/DescribeLunaClientInput";
export * from "../types/DescribeLunaClientOutput";
export * from "../types/DescribeLunaClientExceptionsUnion";

export class DescribeLunaClientCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLunaClientInput,
      OutputTypesUnion,
      DescribeLunaClientOutput,
      CloudHSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeLunaClient;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLunaClientInput,
    DescribeLunaClientOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeLunaClientInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeLunaClientInput,
    DescribeLunaClientOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeLunaClientInput, DescribeLunaClientOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
