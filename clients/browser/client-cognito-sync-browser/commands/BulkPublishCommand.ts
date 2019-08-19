import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { BulkPublish } from "../model/operations/BulkPublish";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { BulkPublishInput } from "../types/BulkPublishInput";
import { BulkPublishOutput } from "../types/BulkPublishOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/BulkPublishInput";
export * from "../types/BulkPublishOutput";
export * from "../types/BulkPublishExceptionsUnion";

export class BulkPublishCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      BulkPublishInput,
      OutputTypesUnion,
      BulkPublishOutput,
      CognitoSyncResolvedConfiguration,
      Blob
    > {
  readonly model = BulkPublish;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    BulkPublishInput,
    BulkPublishOutput,
    Blob
  >();

  constructor(readonly input: BulkPublishInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<BulkPublishInput, BulkPublishOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<BulkPublishInput, BulkPublishOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
