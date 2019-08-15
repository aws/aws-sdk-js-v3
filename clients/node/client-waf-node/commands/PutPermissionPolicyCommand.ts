import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutPermissionPolicy } from "../model/operations/PutPermissionPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutPermissionPolicyInput } from "../types/PutPermissionPolicyInput";
import { PutPermissionPolicyOutput } from "../types/PutPermissionPolicyOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
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
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutPermissionPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutPermissionPolicyInput,
    PutPermissionPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutPermissionPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
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
