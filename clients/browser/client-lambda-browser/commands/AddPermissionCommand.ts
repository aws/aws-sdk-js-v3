import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddPermission } from "../model/operations/AddPermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddPermissionInput } from "../types/AddPermissionInput";
import { AddPermissionOutput } from "../types/AddPermissionOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/AddPermissionInput";
export * from "../types/AddPermissionOutput";
export * from "../types/AddPermissionExceptionsUnion";

export class AddPermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddPermissionInput,
      OutputTypesUnion,
      AddPermissionOutput,
      LambdaResolvedConfiguration,
      Blob
    > {
  readonly model = AddPermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddPermissionInput,
    AddPermissionOutput,
    Blob
  >();

  constructor(readonly input: AddPermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<AddPermissionInput, AddPermissionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddPermissionInput, AddPermissionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
