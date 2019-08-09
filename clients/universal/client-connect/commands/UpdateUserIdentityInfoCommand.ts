import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateUserIdentityInfo } from "../model/UpdateUserIdentityInfo";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateUserIdentityInfoInput } from "../types/UpdateUserIdentityInfoInput";
import { UpdateUserIdentityInfoOutput } from "../types/UpdateUserIdentityInfoOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/UpdateUserIdentityInfoInput";
export * from "../types/UpdateUserIdentityInfoOutput";
export * from "../types/UpdateUserIdentityInfoExceptionsUnion";

export class UpdateUserIdentityInfoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateUserIdentityInfoInput,
      OutputTypesUnion,
      UpdateUserIdentityInfoOutput,
      ConnectResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateUserIdentityInfo;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateUserIdentityInfoInput,
    UpdateUserIdentityInfoOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateUserIdentityInfoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateUserIdentityInfoInput,
    UpdateUserIdentityInfoOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateUserIdentityInfoInput, UpdateUserIdentityInfoOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
