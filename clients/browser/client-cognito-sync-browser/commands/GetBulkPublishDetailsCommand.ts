import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetBulkPublishDetails } from "../model/GetBulkPublishDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBulkPublishDetailsInput } from "../types/GetBulkPublishDetailsInput";
import { GetBulkPublishDetailsOutput } from "../types/GetBulkPublishDetailsOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/GetBulkPublishDetailsInput";
export * from "../types/GetBulkPublishDetailsOutput";
export * from "../types/GetBulkPublishDetailsExceptionsUnion";

export class GetBulkPublishDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBulkPublishDetailsInput,
      OutputTypesUnion,
      GetBulkPublishDetailsOutput,
      CognitoSyncResolvedConfiguration,
      Blob
    > {
  readonly model = GetBulkPublishDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBulkPublishDetailsInput,
    GetBulkPublishDetailsOutput,
    Blob
  >();

  constructor(readonly input: GetBulkPublishDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBulkPublishDetailsInput,
    GetBulkPublishDetailsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBulkPublishDetailsInput, GetBulkPublishDetailsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
