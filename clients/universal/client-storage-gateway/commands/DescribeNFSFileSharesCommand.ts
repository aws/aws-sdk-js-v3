import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeNFSFileShares } from "../model/DescribeNFSFileShares";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeNFSFileSharesInput } from "../types/DescribeNFSFileSharesInput";
import { DescribeNFSFileSharesOutput } from "../types/DescribeNFSFileSharesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeNFSFileSharesInput";
export * from "../types/DescribeNFSFileSharesOutput";
export * from "../types/DescribeNFSFileSharesExceptionsUnion";

export class DescribeNFSFileSharesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeNFSFileSharesInput,
      OutputTypesUnion,
      DescribeNFSFileSharesOutput,
      StorageGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeNFSFileShares;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeNFSFileSharesInput,
    DescribeNFSFileSharesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeNFSFileSharesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeNFSFileSharesInput,
    DescribeNFSFileSharesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeNFSFileSharesInput, DescribeNFSFileSharesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
