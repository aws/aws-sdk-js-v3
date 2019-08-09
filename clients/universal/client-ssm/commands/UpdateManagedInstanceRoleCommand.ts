import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateManagedInstanceRole } from "../model/UpdateManagedInstanceRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateManagedInstanceRoleInput } from "../types/UpdateManagedInstanceRoleInput";
import { UpdateManagedInstanceRoleOutput } from "../types/UpdateManagedInstanceRoleOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/UpdateManagedInstanceRoleInput";
export * from "../types/UpdateManagedInstanceRoleOutput";
export * from "../types/UpdateManagedInstanceRoleExceptionsUnion";

export class UpdateManagedInstanceRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateManagedInstanceRoleInput,
      OutputTypesUnion,
      UpdateManagedInstanceRoleOutput,
      SSMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateManagedInstanceRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateManagedInstanceRoleInput,
    UpdateManagedInstanceRoleOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateManagedInstanceRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateManagedInstanceRoleInput,
    UpdateManagedInstanceRoleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateManagedInstanceRoleInput, UpdateManagedInstanceRoleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
