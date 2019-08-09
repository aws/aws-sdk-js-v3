import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSMBFileShares } from "../model/DescribeSMBFileShares";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSMBFileSharesInput } from "../types/DescribeSMBFileSharesInput";
import { DescribeSMBFileSharesOutput } from "../types/DescribeSMBFileSharesOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/DescribeSMBFileSharesInput";
export * from "../types/DescribeSMBFileSharesOutput";
export * from "../types/DescribeSMBFileSharesExceptionsUnion";

export class DescribeSMBFileSharesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSMBFileSharesInput,
      OutputTypesUnion,
      DescribeSMBFileSharesOutput,
      StorageGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSMBFileShares;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSMBFileSharesInput,
    DescribeSMBFileSharesOutput,
    Blob
  >();

  constructor(readonly input: DescribeSMBFileSharesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSMBFileSharesInput,
    DescribeSMBFileSharesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSMBFileSharesInput, DescribeSMBFileSharesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
