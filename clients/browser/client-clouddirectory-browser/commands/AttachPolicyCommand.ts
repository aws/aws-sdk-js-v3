import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachPolicy } from "../model/AttachPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachPolicyInput } from "../types/AttachPolicyInput";
import { AttachPolicyOutput } from "../types/AttachPolicyOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/AttachPolicyInput";
export * from "../types/AttachPolicyOutput";
export * from "../types/AttachPolicyExceptionsUnion";

export class AttachPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachPolicyInput,
      OutputTypesUnion,
      AttachPolicyOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = AttachPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachPolicyInput,
    AttachPolicyOutput,
    Blob
  >();

  constructor(readonly input: AttachPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachPolicyInput, AttachPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachPolicyInput, AttachPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
