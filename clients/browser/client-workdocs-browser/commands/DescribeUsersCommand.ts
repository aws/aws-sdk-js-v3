import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeUsers } from "../model/operations/DescribeUsers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeUsersInput } from "../types/DescribeUsersInput";
import { DescribeUsersOutput } from "../types/DescribeUsersOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeUsersInput";
export * from "../types/DescribeUsersOutput";
export * from "../types/DescribeUsersExceptionsUnion";

export class DescribeUsersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeUsersInput,
      OutputTypesUnion,
      DescribeUsersOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeUsers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeUsersInput,
    DescribeUsersOutput,
    Blob
  >();

  constructor(readonly input: DescribeUsersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeUsersInput, DescribeUsersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeUsersInput, DescribeUsersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
