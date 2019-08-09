import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssociateDRTRole } from "../model/AssociateDRTRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateDRTRoleInput } from "../types/AssociateDRTRoleInput";
import { AssociateDRTRoleOutput } from "../types/AssociateDRTRoleOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/AssociateDRTRoleInput";
export * from "../types/AssociateDRTRoleOutput";
export * from "../types/AssociateDRTRoleExceptionsUnion";

export class AssociateDRTRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateDRTRoleInput,
      OutputTypesUnion,
      AssociateDRTRoleOutput,
      ShieldResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssociateDRTRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateDRTRoleInput,
    AssociateDRTRoleOutput,
    Uint8Array
  >();

  constructor(readonly input: AssociateDRTRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<AssociateDRTRoleInput, AssociateDRTRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateDRTRoleInput, AssociateDRTRoleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
