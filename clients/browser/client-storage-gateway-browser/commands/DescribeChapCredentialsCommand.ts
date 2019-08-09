import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeChapCredentials } from "../model/DescribeChapCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeChapCredentialsInput } from "../types/DescribeChapCredentialsInput";
import { DescribeChapCredentialsOutput } from "../types/DescribeChapCredentialsOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeChapCredentialsInput";
export * from "../types/DescribeChapCredentialsOutput";
export * from "../types/DescribeChapCredentialsExceptionsUnion";

export class DescribeChapCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeChapCredentialsInput,
      OutputTypesUnion,
      DescribeChapCredentialsOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeChapCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeChapCredentialsInput,
    DescribeChapCredentialsOutput,
    Blob
  >();

  constructor(readonly input: DescribeChapCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeChapCredentialsInput,
    DescribeChapCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeChapCredentialsInput, DescribeChapCredentialsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
