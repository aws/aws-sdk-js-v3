import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UntagRole } from "../model/UntagRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagRoleInput } from "../types/UntagRoleInput";
import { UntagRoleOutput } from "../types/UntagRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UntagRoleInput";
export * from "../types/UntagRoleOutput";
export * from "../types/UntagRoleExceptionsUnion";

export class UntagRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagRoleInput,
      OutputTypesUnion,
      UntagRoleOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UntagRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagRoleInput,
    UntagRoleOutput,
    Uint8Array
  >();

  constructor(readonly input: UntagRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagRoleInput, UntagRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagRoleInput, UntagRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
