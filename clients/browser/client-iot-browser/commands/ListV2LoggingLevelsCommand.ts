import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListV2LoggingLevels } from "../model/ListV2LoggingLevels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListV2LoggingLevelsInput } from "../types/ListV2LoggingLevelsInput";
import { ListV2LoggingLevelsOutput } from "../types/ListV2LoggingLevelsOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ListV2LoggingLevelsInput";
export * from "../types/ListV2LoggingLevelsOutput";
export * from "../types/ListV2LoggingLevelsExceptionsUnion";

export class ListV2LoggingLevelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListV2LoggingLevelsInput,
      OutputTypesUnion,
      ListV2LoggingLevelsOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = ListV2LoggingLevels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListV2LoggingLevelsInput,
    ListV2LoggingLevelsOutput,
    Blob
  >();

  constructor(readonly input: ListV2LoggingLevelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListV2LoggingLevelsInput,
    ListV2LoggingLevelsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListV2LoggingLevelsInput, ListV2LoggingLevelsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
