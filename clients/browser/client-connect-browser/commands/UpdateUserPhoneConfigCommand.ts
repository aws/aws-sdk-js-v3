import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUserPhoneConfig } from "../model/UpdateUserPhoneConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserPhoneConfigInput } from "../types/UpdateUserPhoneConfigInput";
import { UpdateUserPhoneConfigOutput } from "../types/UpdateUserPhoneConfigOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/UpdateUserPhoneConfigInput";
export * from "../types/UpdateUserPhoneConfigOutput";
export * from "../types/UpdateUserPhoneConfigExceptionsUnion";

export class UpdateUserPhoneConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserPhoneConfigInput,
      OutputTypesUnion,
      UpdateUserPhoneConfigOutput,
      ConnectResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateUserPhoneConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserPhoneConfigInput,
    UpdateUserPhoneConfigOutput,
    Blob
  >();

  constructor(readonly input: UpdateUserPhoneConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserPhoneConfigInput,
    UpdateUserPhoneConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserPhoneConfigInput, UpdateUserPhoneConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
