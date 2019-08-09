import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMediaForFragmentList } from "../model/GetMediaForFragmentList";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMediaForFragmentListInput } from "../types/GetMediaForFragmentListInput";
import { GetMediaForFragmentListOutput } from "../types/GetMediaForFragmentListOutput";
import { KinesisVideoArchivedMediaResolvedConfiguration } from "../KinesisVideoArchivedMediaConfiguration";
export * from "../types/GetMediaForFragmentListInput";
export * from "../types/GetMediaForFragmentListOutput";
export * from "../types/GetMediaForFragmentListExceptionsUnion";

export class GetMediaForFragmentListCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMediaForFragmentListInput,
      OutputTypesUnion,
      GetMediaForFragmentListOutput,
      KinesisVideoArchivedMediaResolvedConfiguration,
      Blob
    > {
  readonly model = GetMediaForFragmentList;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMediaForFragmentListInput,
    GetMediaForFragmentListOutput,
    Blob
  >();

  constructor(readonly input: GetMediaForFragmentListInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: KinesisVideoArchivedMediaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetMediaForFragmentListInput,
    GetMediaForFragmentListOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMediaForFragmentListInput, GetMediaForFragmentListOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
