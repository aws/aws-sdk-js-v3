import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeContinuousBackups } from "../model/DescribeContinuousBackups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeContinuousBackupsInput } from "../types/DescribeContinuousBackupsInput";
import { DescribeContinuousBackupsOutput } from "../types/DescribeContinuousBackupsOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/DescribeContinuousBackupsInput";
export * from "../types/DescribeContinuousBackupsOutput";
export * from "../types/DescribeContinuousBackupsExceptionsUnion";

export class DescribeContinuousBackupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeContinuousBackupsInput,
      OutputTypesUnion,
      DescribeContinuousBackupsOutput,
      DynamoDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeContinuousBackups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeContinuousBackupsInput,
    DescribeContinuousBackupsOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeContinuousBackupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeContinuousBackupsInput,
    DescribeContinuousBackupsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeContinuousBackupsInput, DescribeContinuousBackupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
