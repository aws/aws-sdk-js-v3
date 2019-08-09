import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateRoleToGroup } from "../model/AssociateRoleToGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateRoleToGroupInput } from "../types/AssociateRoleToGroupInput";
import { AssociateRoleToGroupOutput } from "../types/AssociateRoleToGroupOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/AssociateRoleToGroupInput";
export * from "../types/AssociateRoleToGroupOutput";
export * from "../types/AssociateRoleToGroupExceptionsUnion";

export class AssociateRoleToGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateRoleToGroupInput,
      OutputTypesUnion,
      AssociateRoleToGroupOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateRoleToGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateRoleToGroupInput,
    AssociateRoleToGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateRoleToGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateRoleToGroupInput,
    AssociateRoleToGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateRoleToGroupInput, AssociateRoleToGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
