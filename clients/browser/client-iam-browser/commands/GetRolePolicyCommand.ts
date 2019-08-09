import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRolePolicy } from "../model/GetRolePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRolePolicyInput } from "../types/GetRolePolicyInput";
import { GetRolePolicyOutput } from "../types/GetRolePolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetRolePolicyInput";
export * from "../types/GetRolePolicyOutput";
export * from "../types/GetRolePolicyExceptionsUnion";

export class GetRolePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRolePolicyInput,
      OutputTypesUnion,
      GetRolePolicyOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GetRolePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRolePolicyInput,
    GetRolePolicyOutput,
    Blob
  >();

  constructor(readonly input: GetRolePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRolePolicyInput, GetRolePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRolePolicyInput, GetRolePolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
