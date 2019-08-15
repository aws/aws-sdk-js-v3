import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDocumentPermission } from "../model/operations/DescribeDocumentPermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDocumentPermissionInput } from "../types/DescribeDocumentPermissionInput";
import { DescribeDocumentPermissionOutput } from "../types/DescribeDocumentPermissionOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/DescribeDocumentPermissionInput";
export * from "../types/DescribeDocumentPermissionOutput";
export * from "../types/DescribeDocumentPermissionExceptionsUnion";

export class DescribeDocumentPermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDocumentPermissionInput,
      OutputTypesUnion,
      DescribeDocumentPermissionOutput,
      SSMResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDocumentPermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDocumentPermissionInput,
    DescribeDocumentPermissionOutput,
    Blob
  >();

  constructor(readonly input: DescribeDocumentPermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeDocumentPermissionInput,
    DescribeDocumentPermissionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeDocumentPermissionInput,
        DescribeDocumentPermissionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
