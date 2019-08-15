import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRole } from "../model/operations/GetRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRoleInput } from "../types/GetRoleInput";
import { GetRoleOutput } from "../types/GetRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetRoleInput";
export * from "../types/GetRoleOutput";
export * from "../types/GetRoleExceptionsUnion";

export class GetRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRoleInput,
      OutputTypesUnion,
      GetRoleOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRoleInput,
    GetRoleOutput,
    Blob
  >();

  constructor(readonly input: GetRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRoleInput, GetRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRoleInput, GetRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
