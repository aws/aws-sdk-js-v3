import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAccount } from "../model/operations/DescribeAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAccountInput } from "../types/DescribeAccountInput";
import { DescribeAccountOutput } from "../types/DescribeAccountOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DescribeAccountInput";
export * from "../types/DescribeAccountOutput";
export * from "../types/DescribeAccountExceptionsUnion";

export class DescribeAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAccountInput,
      OutputTypesUnion,
      DescribeAccountOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAccountInput,
    DescribeAccountOutput,
    Blob
  >();

  constructor(readonly input: DescribeAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAccountInput, DescribeAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAccountInput, DescribeAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
