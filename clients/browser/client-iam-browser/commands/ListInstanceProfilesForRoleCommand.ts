import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListInstanceProfilesForRole } from "../model/operations/ListInstanceProfilesForRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListInstanceProfilesForRoleInput } from "../types/ListInstanceProfilesForRoleInput";
import { ListInstanceProfilesForRoleOutput } from "../types/ListInstanceProfilesForRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListInstanceProfilesForRoleInput";
export * from "../types/ListInstanceProfilesForRoleOutput";
export * from "../types/ListInstanceProfilesForRoleExceptionsUnion";

export class ListInstanceProfilesForRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListInstanceProfilesForRoleInput,
      OutputTypesUnion,
      ListInstanceProfilesForRoleOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = ListInstanceProfilesForRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListInstanceProfilesForRoleInput,
    ListInstanceProfilesForRoleOutput,
    Blob
  >();

  constructor(readonly input: ListInstanceProfilesForRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListInstanceProfilesForRoleInput,
    ListInstanceProfilesForRoleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListInstanceProfilesForRoleInput,
        ListInstanceProfilesForRoleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
