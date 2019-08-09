import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListTargetsForPolicy } from "../model/ListTargetsForPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListTargetsForPolicyInput } from "../types/ListTargetsForPolicyInput";
import { ListTargetsForPolicyOutput } from "../types/ListTargetsForPolicyOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListTargetsForPolicyInput";
export * from "../types/ListTargetsForPolicyOutput";
export * from "../types/ListTargetsForPolicyExceptionsUnion";

export class ListTargetsForPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListTargetsForPolicyInput,
      OutputTypesUnion,
      ListTargetsForPolicyOutput,
      OrganizationsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListTargetsForPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListTargetsForPolicyInput,
    ListTargetsForPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: ListTargetsForPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListTargetsForPolicyInput,
    ListTargetsForPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListTargetsForPolicyInput, ListTargetsForPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
