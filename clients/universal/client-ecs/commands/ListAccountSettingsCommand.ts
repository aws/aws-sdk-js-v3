import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAccountSettings } from "../model/ListAccountSettings";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAccountSettingsInput } from "../types/ListAccountSettingsInput";
import { ListAccountSettingsOutput } from "../types/ListAccountSettingsOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/ListAccountSettingsInput";
export * from "../types/ListAccountSettingsOutput";
export * from "../types/ListAccountSettingsExceptionsUnion";

export class ListAccountSettingsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAccountSettingsInput,
      OutputTypesUnion,
      ListAccountSettingsOutput,
      ECSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListAccountSettings;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAccountSettingsInput,
    ListAccountSettingsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListAccountSettingsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListAccountSettingsInput,
    ListAccountSettingsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAccountSettingsInput, ListAccountSettingsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
