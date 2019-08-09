import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AssumeRole } from "../model/AssumeRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssumeRoleInput } from "../types/AssumeRoleInput";
import { AssumeRoleOutput } from "../types/AssumeRoleOutput";
import { STSResolvedConfiguration } from "../STSConfiguration";
export * from "../types/AssumeRoleInput";
export * from "../types/AssumeRoleOutput";
export * from "../types/AssumeRoleExceptionsUnion";

export class AssumeRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssumeRoleInput,
      OutputTypesUnion,
      AssumeRoleOutput,
      STSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AssumeRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssumeRoleInput,
    AssumeRoleOutput,
    Uint8Array
  >();

  constructor(readonly input: AssumeRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: STSResolvedConfiguration
  ): __aws_sdk_types.Handler<AssumeRoleInput, AssumeRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssumeRoleInput, AssumeRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
