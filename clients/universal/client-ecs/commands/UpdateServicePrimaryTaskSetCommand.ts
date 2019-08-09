import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateServicePrimaryTaskSet } from "../model/UpdateServicePrimaryTaskSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateServicePrimaryTaskSetInput } from "../types/UpdateServicePrimaryTaskSetInput";
import { UpdateServicePrimaryTaskSetOutput } from "../types/UpdateServicePrimaryTaskSetOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/UpdateServicePrimaryTaskSetInput";
export * from "../types/UpdateServicePrimaryTaskSetOutput";
export * from "../types/UpdateServicePrimaryTaskSetExceptionsUnion";

export class UpdateServicePrimaryTaskSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateServicePrimaryTaskSetInput,
      OutputTypesUnion,
      UpdateServicePrimaryTaskSetOutput,
      ECSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateServicePrimaryTaskSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateServicePrimaryTaskSetInput,
    UpdateServicePrimaryTaskSetOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateServicePrimaryTaskSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateServicePrimaryTaskSetInput,
    UpdateServicePrimaryTaskSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateServicePrimaryTaskSetInput,
        UpdateServicePrimaryTaskSetOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
