import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreatePolicy } from "../model/operations/CreatePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePolicyInput } from "../types/CreatePolicyInput";
import { CreatePolicyOutput } from "../types/CreatePolicyOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/CreatePolicyInput";
export * from "../types/CreatePolicyOutput";
export * from "../types/CreatePolicyExceptionsUnion";

export class CreatePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePolicyInput,
      OutputTypesUnion,
      CreatePolicyOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = CreatePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePolicyInput,
    CreatePolicyOutput,
    Blob
  >();

  constructor(readonly input: CreatePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreatePolicyInput, CreatePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePolicyInput, CreatePolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
