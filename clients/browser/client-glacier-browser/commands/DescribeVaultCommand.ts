import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeVault } from "../model/operations/DescribeVault";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeVaultInput } from "../types/DescribeVaultInput";
import { DescribeVaultOutput } from "../types/DescribeVaultOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/DescribeVaultInput";
export * from "../types/DescribeVaultOutput";
export * from "../types/DescribeVaultExceptionsUnion";

export class DescribeVaultCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeVaultInput,
      OutputTypesUnion,
      DescribeVaultOutput,
      GlacierResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeVault;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeVaultInput,
    DescribeVaultOutput,
    Blob
  >();

  constructor(readonly input: DescribeVaultInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeVaultInput, DescribeVaultOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeVaultInput, DescribeVaultOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
