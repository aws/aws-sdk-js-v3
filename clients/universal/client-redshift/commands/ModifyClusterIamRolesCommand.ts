import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyClusterIamRoles } from "../model/ModifyClusterIamRoles";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClusterIamRolesInput } from "../types/ModifyClusterIamRolesInput";
import { ModifyClusterIamRolesOutput } from "../types/ModifyClusterIamRolesOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyClusterIamRolesInput";
export * from "../types/ModifyClusterIamRolesOutput";
export * from "../types/ModifyClusterIamRolesExceptionsUnion";

export class ModifyClusterIamRolesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClusterIamRolesInput,
      OutputTypesUnion,
      ModifyClusterIamRolesOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyClusterIamRoles;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterIamRolesInput,
    ModifyClusterIamRolesOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyClusterIamRolesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClusterIamRolesInput,
    ModifyClusterIamRolesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyClusterIamRolesInput, ModifyClusterIamRolesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
