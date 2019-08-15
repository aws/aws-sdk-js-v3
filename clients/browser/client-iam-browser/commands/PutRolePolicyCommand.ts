import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRolePolicy } from "../model/operations/PutRolePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRolePolicyInput } from "../types/PutRolePolicyInput";
import { PutRolePolicyOutput } from "../types/PutRolePolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/PutRolePolicyInput";
export * from "../types/PutRolePolicyOutput";
export * from "../types/PutRolePolicyExceptionsUnion";

export class PutRolePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRolePolicyInput,
      OutputTypesUnion,
      PutRolePolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = PutRolePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRolePolicyInput,
    PutRolePolicyOutput,
    Blob
  >();

  constructor(readonly input: PutRolePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<PutRolePolicyInput, PutRolePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRolePolicyInput, PutRolePolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
