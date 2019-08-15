import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRole } from "../model/operations/CreateRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRoleInput } from "../types/CreateRoleInput";
import { CreateRoleOutput } from "../types/CreateRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateRoleInput";
export * from "../types/CreateRoleOutput";
export * from "../types/CreateRoleExceptionsUnion";

export class CreateRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRoleInput,
      OutputTypesUnion,
      CreateRoleOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = CreateRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRoleInput,
    CreateRoleOutput,
    Blob
  >();

  constructor(readonly input: CreateRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRoleInput, CreateRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRoleInput, CreateRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
