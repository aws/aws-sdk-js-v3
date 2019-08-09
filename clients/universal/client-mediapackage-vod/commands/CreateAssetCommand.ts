import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateAsset } from "../model/CreateAsset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAssetInput } from "../types/CreateAssetInput";
import { CreateAssetOutput } from "../types/CreateAssetOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/CreateAssetInput";
export * from "../types/CreateAssetOutput";
export * from "../types/CreateAssetExceptionsUnion";

export class CreateAssetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAssetInput,
      OutputTypesUnion,
      CreateAssetOutput,
      MediaPackageVodResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateAsset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAssetInput,
    CreateAssetOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateAssetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAssetInput, CreateAssetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAssetInput, CreateAssetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
