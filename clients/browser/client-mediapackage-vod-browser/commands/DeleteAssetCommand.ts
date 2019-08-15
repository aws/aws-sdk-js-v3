import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAsset } from "../model/operations/DeleteAsset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAssetInput } from "../types/DeleteAssetInput";
import { DeleteAssetOutput } from "../types/DeleteAssetOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/DeleteAssetInput";
export * from "../types/DeleteAssetOutput";
export * from "../types/DeleteAssetExceptionsUnion";

export class DeleteAssetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAssetInput,
      OutputTypesUnion,
      DeleteAssetOutput,
      MediaPackageVodResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAsset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAssetInput,
    DeleteAssetOutput,
    Blob
  >();

  constructor(readonly input: DeleteAssetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAssetInput, DeleteAssetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAssetInput, DeleteAssetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
