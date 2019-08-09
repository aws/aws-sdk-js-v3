import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeProtectedResource } from "../model/DescribeProtectedResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeProtectedResourceInput } from "../types/DescribeProtectedResourceInput";
import { DescribeProtectedResourceOutput } from "../types/DescribeProtectedResourceOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/DescribeProtectedResourceInput";
export * from "../types/DescribeProtectedResourceOutput";
export * from "../types/DescribeProtectedResourceExceptionsUnion";

export class DescribeProtectedResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeProtectedResourceInput,
      OutputTypesUnion,
      DescribeProtectedResourceOutput,
      BackupResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeProtectedResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeProtectedResourceInput,
    DescribeProtectedResourceOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeProtectedResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeProtectedResourceInput,
    DescribeProtectedResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeProtectedResourceInput, DescribeProtectedResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
