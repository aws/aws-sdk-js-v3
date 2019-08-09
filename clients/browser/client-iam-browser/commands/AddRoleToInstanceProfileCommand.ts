import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddRoleToInstanceProfile } from "../model/AddRoleToInstanceProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddRoleToInstanceProfileInput } from "../types/AddRoleToInstanceProfileInput";
import { AddRoleToInstanceProfileOutput } from "../types/AddRoleToInstanceProfileOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/AddRoleToInstanceProfileInput";
export * from "../types/AddRoleToInstanceProfileOutput";
export * from "../types/AddRoleToInstanceProfileExceptionsUnion";

export class AddRoleToInstanceProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddRoleToInstanceProfileInput,
      OutputTypesUnion,
      AddRoleToInstanceProfileOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = AddRoleToInstanceProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddRoleToInstanceProfileInput,
    AddRoleToInstanceProfileOutput,
    Blob
  >();

  constructor(readonly input: AddRoleToInstanceProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddRoleToInstanceProfileInput,
    AddRoleToInstanceProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddRoleToInstanceProfileInput, AddRoleToInstanceProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
