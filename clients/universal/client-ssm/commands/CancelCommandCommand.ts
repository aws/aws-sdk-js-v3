import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CancelCommand } from "../model/CancelCommand";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelCommandInput } from "../types/CancelCommandInput";
import { CancelCommandOutput } from "../types/CancelCommandOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CancelCommandInput";
export * from "../types/CancelCommandOutput";
export * from "../types/CancelCommandExceptionsUnion";

export class CancelCommandCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelCommandInput,
      OutputTypesUnion,
      CancelCommandOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CancelCommand;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelCommandInput,
    CancelCommandOutput,
    Uint8Array
  >();

  constructor(readonly input: CancelCommandInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelCommandInput, CancelCommandOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelCommandInput, CancelCommandOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
