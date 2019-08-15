import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AddUserToGroup } from "../model/operations/AddUserToGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddUserToGroupInput } from "../types/AddUserToGroupInput";
import { AddUserToGroupOutput } from "../types/AddUserToGroupOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/AddUserToGroupInput";
export * from "../types/AddUserToGroupOutput";
export * from "../types/AddUserToGroupExceptionsUnion";

export class AddUserToGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddUserToGroupInput,
      OutputTypesUnion,
      AddUserToGroupOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = AddUserToGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddUserToGroupInput,
    AddUserToGroupOutput,
    Blob
  >();

  constructor(readonly input: AddUserToGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<AddUserToGroupInput, AddUserToGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddUserToGroupInput, AddUserToGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
