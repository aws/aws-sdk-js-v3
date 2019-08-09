import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeAsset } from "../model/DescribeAsset";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeAssetInput } from "../types/DescribeAssetInput";
import { DescribeAssetOutput } from "../types/DescribeAssetOutput";
import { MediaPackageVodResolvedConfiguration } from "../MediaPackageVodConfiguration";
export * from "../types/DescribeAssetInput";
export * from "../types/DescribeAssetOutput";
export * from "../types/DescribeAssetExceptionsUnion";

export class DescribeAssetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeAssetInput,
      OutputTypesUnion,
      DescribeAssetOutput,
      MediaPackageVodResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeAsset;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeAssetInput,
    DescribeAssetOutput,
    Blob
  >();

  constructor(readonly input: DescribeAssetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaPackageVodResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeAssetInput, DescribeAssetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeAssetInput, DescribeAssetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
