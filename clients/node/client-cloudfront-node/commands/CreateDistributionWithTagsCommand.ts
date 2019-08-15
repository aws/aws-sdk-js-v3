import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDistributionWithTags } from "../model/operations/CreateDistributionWithTags";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDistributionWithTagsInput } from "../types/CreateDistributionWithTagsInput";
import { CreateDistributionWithTagsOutput } from "../types/CreateDistributionWithTagsOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateDistributionWithTagsInput";
export * from "../types/CreateDistributionWithTagsOutput";
export * from "../types/CreateDistributionWithTagsExceptionsUnion";

export class CreateDistributionWithTagsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDistributionWithTagsInput,
      OutputTypesUnion,
      CreateDistributionWithTagsOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDistributionWithTags;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDistributionWithTagsInput,
    CreateDistributionWithTagsOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDistributionWithTagsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDistributionWithTagsInput,
    CreateDistributionWithTagsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDistributionWithTagsInput,
        CreateDistributionWithTagsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
