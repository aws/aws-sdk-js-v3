import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteV2LoggingLevel } from "../model/DeleteV2LoggingLevel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteV2LoggingLevelInput } from "../types/DeleteV2LoggingLevelInput";
import { DeleteV2LoggingLevelOutput } from "../types/DeleteV2LoggingLevelOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteV2LoggingLevelInput";
export * from "../types/DeleteV2LoggingLevelOutput";
export * from "../types/DeleteV2LoggingLevelExceptionsUnion";

export class DeleteV2LoggingLevelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteV2LoggingLevelInput,
      OutputTypesUnion,
      DeleteV2LoggingLevelOutput,
      IoTResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteV2LoggingLevel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteV2LoggingLevelInput,
    DeleteV2LoggingLevelOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteV2LoggingLevelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteV2LoggingLevelInput,
    DeleteV2LoggingLevelOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteV2LoggingLevelInput, DeleteV2LoggingLevelOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
