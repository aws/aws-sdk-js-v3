import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeMitigationAction } from "../model/DescribeMitigationAction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeMitigationActionInput } from "../types/DescribeMitigationActionInput";
import { DescribeMitigationActionOutput } from "../types/DescribeMitigationActionOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DescribeMitigationActionInput";
export * from "../types/DescribeMitigationActionOutput";
export * from "../types/DescribeMitigationActionExceptionsUnion";

export class DescribeMitigationActionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeMitigationActionInput,
      OutputTypesUnion,
      DescribeMitigationActionOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeMitigationAction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeMitigationActionInput,
    DescribeMitigationActionOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeMitigationActionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeMitigationActionInput,
    DescribeMitigationActionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeMitigationActionInput, DescribeMitigationActionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
