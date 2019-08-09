import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateKeyDescription } from "../model/UpdateKeyDescription";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateKeyDescriptionInput } from "../types/UpdateKeyDescriptionInput";
import { UpdateKeyDescriptionOutput } from "../types/UpdateKeyDescriptionOutput";
import { KMSResolvedConfiguration } from "../KMSConfiguration";
export * from "../types/UpdateKeyDescriptionInput";
export * from "../types/UpdateKeyDescriptionOutput";
export * from "../types/UpdateKeyDescriptionExceptionsUnion";

export class UpdateKeyDescriptionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateKeyDescriptionInput,
      OutputTypesUnion,
      UpdateKeyDescriptionOutput,
      KMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateKeyDescription;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateKeyDescriptionInput,
    UpdateKeyDescriptionOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateKeyDescriptionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: KMSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateKeyDescriptionInput,
    UpdateKeyDescriptionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateKeyDescriptionInput, UpdateKeyDescriptionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
