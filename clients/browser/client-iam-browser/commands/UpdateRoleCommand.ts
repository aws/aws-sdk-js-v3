import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRole } from "../model/UpdateRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRoleInput } from "../types/UpdateRoleInput";
import { UpdateRoleOutput } from "../types/UpdateRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateRoleInput";
export * from "../types/UpdateRoleOutput";
export * from "../types/UpdateRoleExceptionsUnion";

export class UpdateRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRoleInput,
      OutputTypesUnion,
      UpdateRoleOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRoleInput,
    UpdateRoleOutput,
    Blob
  >();

  constructor(readonly input: UpdateRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRoleInput, UpdateRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRoleInput, UpdateRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
