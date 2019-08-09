import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListAssets } from "../model/ListAssets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListAssetsInput } from "../types/ListAssetsInput";
import { ListAssetsOutput } from "../types/ListAssetsOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/ListAssetsInput";
export * from "../types/ListAssetsOutput";
export * from "../types/ListAssetsExceptionsUnion";

export class ListAssetsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListAssetsInput,
      OutputTypesUnion,
      ListAssetsOutput,
      MediaPackageVodResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListAssets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListAssetsInput,
    ListAssetsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListAssetsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<ListAssetsInput, ListAssetsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListAssetsInput, ListAssetsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
