import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDashboardEmbedUrl } from "../model/operations/GetDashboardEmbedUrl";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDashboardEmbedUrlInput } from "../types/GetDashboardEmbedUrlInput";
import { GetDashboardEmbedUrlOutput } from "../types/GetDashboardEmbedUrlOutput";
import { QuickSightResolvedConfiguration } from "../QuickSightConfiguration";
export * from "../types/GetDashboardEmbedUrlInput";
export * from "../types/GetDashboardEmbedUrlOutput";
export * from "../types/GetDashboardEmbedUrlExceptionsUnion";

export class GetDashboardEmbedUrlCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDashboardEmbedUrlInput,
      OutputTypesUnion,
      GetDashboardEmbedUrlOutput,
      QuickSightResolvedConfiguration,
      Blob
    > {
  readonly model = GetDashboardEmbedUrl;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDashboardEmbedUrlInput,
    GetDashboardEmbedUrlOutput,
    Blob
  >();

  constructor(readonly input: GetDashboardEmbedUrlInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: QuickSightResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDashboardEmbedUrlInput,
    GetDashboardEmbedUrlOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDashboardEmbedUrlInput, GetDashboardEmbedUrlOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
