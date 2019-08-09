import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutPermissionPolicy } from "../model/PutPermissionPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPermissionPolicyInput } from "../types/PutPermissionPolicyInput";
import { PutPermissionPolicyOutput } from "../types/PutPermissionPolicyOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/PutPermissionPolicyInput";
export * from "../types/PutPermissionPolicyOutput";
export * from "../types/PutPermissionPolicyExceptionsUnion";

export class PutPermissionPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutPermissionPolicyInput,
      OutputTypesUnion,
      PutPermissionPolicyOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = PutPermissionPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPermissionPolicyInput,
    PutPermissionPolicyOutput,
    Blob
  >();

  constructor(readonly input: PutPermissionPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutPermissionPolicyInput,
    PutPermissionPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutPermissionPolicyInput, PutPermissionPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
