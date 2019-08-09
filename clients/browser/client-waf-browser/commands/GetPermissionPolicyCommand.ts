import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetPermissionPolicy } from "../model/GetPermissionPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetPermissionPolicyInput } from "../types/GetPermissionPolicyInput";
import { GetPermissionPolicyOutput } from "../types/GetPermissionPolicyOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetPermissionPolicyInput";
export * from "../types/GetPermissionPolicyOutput";
export * from "../types/GetPermissionPolicyExceptionsUnion";

export class GetPermissionPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetPermissionPolicyInput,
      OutputTypesUnion,
      GetPermissionPolicyOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = GetPermissionPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetPermissionPolicyInput,
    GetPermissionPolicyOutput,
    Blob
  >();

  constructor(readonly input: GetPermissionPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetPermissionPolicyInput,
    GetPermissionPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetPermissionPolicyInput, GetPermissionPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
