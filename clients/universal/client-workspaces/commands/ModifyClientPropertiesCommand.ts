import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyClientProperties } from "../model/ModifyClientProperties";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClientPropertiesInput } from "../types/ModifyClientPropertiesInput";
import { ModifyClientPropertiesOutput } from "../types/ModifyClientPropertiesOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/ModifyClientPropertiesInput";
export * from "../types/ModifyClientPropertiesOutput";
export * from "../types/ModifyClientPropertiesExceptionsUnion";

export class ModifyClientPropertiesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClientPropertiesInput,
      OutputTypesUnion,
      ModifyClientPropertiesOutput,
      WorkSpacesResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyClientProperties;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClientPropertiesInput,
    ModifyClientPropertiesOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyClientPropertiesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClientPropertiesInput,
    ModifyClientPropertiesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyClientPropertiesInput, ModifyClientPropertiesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
