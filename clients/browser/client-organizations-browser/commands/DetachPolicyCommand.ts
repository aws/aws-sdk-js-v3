import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DetachPolicy } from "../model/operations/DetachPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DetachPolicyInput } from "../types/DetachPolicyInput";
import { DetachPolicyOutput } from "../types/DetachPolicyOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DetachPolicyInput";
export * from "../types/DetachPolicyOutput";
export * from "../types/DetachPolicyExceptionsUnion";

export class DetachPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DetachPolicyInput,
      OutputTypesUnion,
      DetachPolicyOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DetachPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DetachPolicyInput,
    DetachPolicyOutput,
    Blob
  >();

  constructor(readonly input: DetachPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<DetachPolicyInput, DetachPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DetachPolicyInput, DetachPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
