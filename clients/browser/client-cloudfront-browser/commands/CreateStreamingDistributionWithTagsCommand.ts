import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateStreamingDistributionWithTags } from "../model/operations/CreateStreamingDistributionWithTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStreamingDistributionWithTagsInput } from "../types/CreateStreamingDistributionWithTagsInput";
import { CreateStreamingDistributionWithTagsOutput } from "../types/CreateStreamingDistributionWithTagsOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateStreamingDistributionWithTagsInput";
export * from "../types/CreateStreamingDistributionWithTagsOutput";
export * from "../types/CreateStreamingDistributionWithTagsExceptionsUnion";

export class CreateStreamingDistributionWithTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStreamingDistributionWithTagsInput,
      OutputTypesUnion,
      CreateStreamingDistributionWithTagsOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = CreateStreamingDistributionWithTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStreamingDistributionWithTagsInput,
    CreateStreamingDistributionWithTagsOutput,
    Blob
  >();

  constructor(readonly input: CreateStreamingDistributionWithTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateStreamingDistributionWithTagsInput,
    CreateStreamingDistributionWithTagsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateStreamingDistributionWithTagsInput,
        CreateStreamingDistributionWithTagsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
