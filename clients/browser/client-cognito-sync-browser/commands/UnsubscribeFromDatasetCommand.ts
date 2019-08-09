import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UnsubscribeFromDataset } from "../model/UnsubscribeFromDataset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UnsubscribeFromDatasetInput } from "../types/UnsubscribeFromDatasetInput";
import { UnsubscribeFromDatasetOutput } from "../types/UnsubscribeFromDatasetOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/UnsubscribeFromDatasetInput";
export * from "../types/UnsubscribeFromDatasetOutput";
export * from "../types/UnsubscribeFromDatasetExceptionsUnion";

export class UnsubscribeFromDatasetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UnsubscribeFromDatasetInput,
      OutputTypesUnion,
      UnsubscribeFromDatasetOutput,
      CognitoSyncResolvedConfiguration,
      Blob
    > {
  readonly model = UnsubscribeFromDataset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UnsubscribeFromDatasetInput,
    UnsubscribeFromDatasetOutput,
    Blob
  >();

  constructor(readonly input: UnsubscribeFromDatasetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UnsubscribeFromDatasetInput,
    UnsubscribeFromDatasetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UnsubscribeFromDatasetInput, UnsubscribeFromDatasetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
