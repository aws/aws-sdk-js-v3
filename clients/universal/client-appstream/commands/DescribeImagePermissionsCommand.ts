import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeImagePermissions } from "../model/DescribeImagePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeImagePermissionsInput } from "../types/DescribeImagePermissionsInput";
import { DescribeImagePermissionsOutput } from "../types/DescribeImagePermissionsOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/DescribeImagePermissionsInput";
export * from "../types/DescribeImagePermissionsOutput";
export * from "../types/DescribeImagePermissionsExceptionsUnion";

export class DescribeImagePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeImagePermissionsInput,
      OutputTypesUnion,
      DescribeImagePermissionsOutput,
      AppStreamResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeImagePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeImagePermissionsInput,
    DescribeImagePermissionsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeImagePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeImagePermissionsInput,
    DescribeImagePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeImagePermissionsInput, DescribeImagePermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
