import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GrantAccess } from "../model/GrantAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GrantAccessInput } from "../types/GrantAccessInput";
import { GrantAccessOutput } from "../types/GrantAccessOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/GrantAccessInput";
export * from "../types/GrantAccessOutput";
export * from "../types/GrantAccessExceptionsUnion";

export class GrantAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GrantAccessInput,
      OutputTypesUnion,
      GrantAccessOutput,
      OpsWorksResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GrantAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GrantAccessInput,
    GrantAccessOutput,
    Uint8Array
  >();

  constructor(readonly input: GrantAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<GrantAccessInput, GrantAccessOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GrantAccessInput, GrantAccessOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
