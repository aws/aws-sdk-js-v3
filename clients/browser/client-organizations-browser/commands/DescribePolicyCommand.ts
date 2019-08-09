import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribePolicy } from "../model/DescribePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePolicyInput } from "../types/DescribePolicyInput";
import { DescribePolicyOutput } from "../types/DescribePolicyOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DescribePolicyInput";
export * from "../types/DescribePolicyOutput";
export * from "../types/DescribePolicyExceptionsUnion";

export class DescribePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePolicyInput,
      OutputTypesUnion,
      DescribePolicyOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePolicyInput,
    DescribePolicyOutput,
    Blob
  >();

  constructor(readonly input: DescribePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribePolicyInput, DescribePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribePolicyInput, DescribePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
