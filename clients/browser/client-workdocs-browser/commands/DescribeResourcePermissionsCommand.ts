import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeResourcePermissions } from "../model/operations/DescribeResourcePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeResourcePermissionsInput } from "../types/DescribeResourcePermissionsInput";
import { DescribeResourcePermissionsOutput } from "../types/DescribeResourcePermissionsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DescribeResourcePermissionsInput";
export * from "../types/DescribeResourcePermissionsOutput";
export * from "../types/DescribeResourcePermissionsExceptionsUnion";

export class DescribeResourcePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeResourcePermissionsInput,
      OutputTypesUnion,
      DescribeResourcePermissionsOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeResourcePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeResourcePermissionsInput,
    DescribeResourcePermissionsOutput,
    Blob
  >();

  constructor(readonly input: DescribeResourcePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeResourcePermissionsInput,
    DescribeResourcePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeResourcePermissionsInput,
        DescribeResourcePermissionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
