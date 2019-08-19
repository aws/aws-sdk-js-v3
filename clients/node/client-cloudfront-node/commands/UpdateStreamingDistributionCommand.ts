import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateStreamingDistribution } from "../model/operations/UpdateStreamingDistribution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateStreamingDistributionInput } from "../types/UpdateStreamingDistributionInput";
import { UpdateStreamingDistributionOutput } from "../types/UpdateStreamingDistributionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateStreamingDistributionInput";
export * from "../types/UpdateStreamingDistributionOutput";
export * from "../types/UpdateStreamingDistributionExceptionsUnion";

export class UpdateStreamingDistributionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateStreamingDistributionInput,
      OutputTypesUnion,
      UpdateStreamingDistributionOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateStreamingDistribution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateStreamingDistributionInput,
    UpdateStreamingDistributionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateStreamingDistributionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateStreamingDistributionInput,
    UpdateStreamingDistributionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        UpdateStreamingDistributionInput,
        UpdateStreamingDistributionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
