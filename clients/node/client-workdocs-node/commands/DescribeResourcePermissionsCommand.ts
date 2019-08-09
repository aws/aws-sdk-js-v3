import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeResourcePermissions } from "../model/DescribeResourcePermissions";
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
      _stream.Readable
    > {
  readonly model = DescribeResourcePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeResourcePermissionsInput,
    DescribeResourcePermissionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeResourcePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
