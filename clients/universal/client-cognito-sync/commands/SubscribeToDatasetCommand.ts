import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SubscribeToDataset } from "../model/SubscribeToDataset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SubscribeToDatasetInput } from "../types/SubscribeToDatasetInput";
import { SubscribeToDatasetOutput } from "../types/SubscribeToDatasetOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/SubscribeToDatasetInput";
export * from "../types/SubscribeToDatasetOutput";
export * from "../types/SubscribeToDatasetExceptionsUnion";

export class SubscribeToDatasetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SubscribeToDatasetInput,
      OutputTypesUnion,
      SubscribeToDatasetOutput,
      CognitoSyncResolvedConfiguration,
      Uint8Array
    > {
  readonly model = SubscribeToDataset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SubscribeToDatasetInput,
    SubscribeToDatasetOutput,
    Uint8Array
  >();

  constructor(readonly input: SubscribeToDatasetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SubscribeToDatasetInput,
    SubscribeToDatasetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SubscribeToDatasetInput, SubscribeToDatasetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
