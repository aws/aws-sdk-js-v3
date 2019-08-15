import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetStreamingDistribution } from "../model/operations/GetStreamingDistribution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetStreamingDistributionInput } from "../types/GetStreamingDistributionInput";
import { GetStreamingDistributionOutput } from "../types/GetStreamingDistributionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetStreamingDistributionInput";
export * from "../types/GetStreamingDistributionOutput";
export * from "../types/GetStreamingDistributionExceptionsUnion";

export class GetStreamingDistributionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetStreamingDistributionInput,
      OutputTypesUnion,
      GetStreamingDistributionOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetStreamingDistribution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetStreamingDistributionInput,
    GetStreamingDistributionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetStreamingDistributionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetStreamingDistributionInput,
    GetStreamingDistributionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetStreamingDistributionInput, GetStreamingDistributionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
