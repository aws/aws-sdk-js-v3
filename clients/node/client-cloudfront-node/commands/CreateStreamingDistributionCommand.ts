import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateStreamingDistribution } from "../model/operations/CreateStreamingDistribution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateStreamingDistributionInput } from "../types/CreateStreamingDistributionInput";
import { CreateStreamingDistributionOutput } from "../types/CreateStreamingDistributionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateStreamingDistributionInput";
export * from "../types/CreateStreamingDistributionOutput";
export * from "../types/CreateStreamingDistributionExceptionsUnion";

export class CreateStreamingDistributionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateStreamingDistributionInput,
      OutputTypesUnion,
      CreateStreamingDistributionOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateStreamingDistribution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateStreamingDistributionInput,
    CreateStreamingDistributionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateStreamingDistributionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateStreamingDistributionInput,
    CreateStreamingDistributionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateStreamingDistributionInput,
        CreateStreamingDistributionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
