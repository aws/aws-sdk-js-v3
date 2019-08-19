import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteStreamingDistribution } from "../model/operations/DeleteStreamingDistribution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteStreamingDistributionInput } from "../types/DeleteStreamingDistributionInput";
import { DeleteStreamingDistributionOutput } from "../types/DeleteStreamingDistributionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeleteStreamingDistributionInput";
export * from "../types/DeleteStreamingDistributionOutput";
export * from "../types/DeleteStreamingDistributionExceptionsUnion";

export class DeleteStreamingDistributionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteStreamingDistributionInput,
      OutputTypesUnion,
      DeleteStreamingDistributionOutput,
      CloudFrontResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteStreamingDistribution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteStreamingDistributionInput,
    DeleteStreamingDistributionOutput,
    Blob
  >();

  constructor(readonly input: DeleteStreamingDistributionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteStreamingDistributionInput,
    DeleteStreamingDistributionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteStreamingDistributionInput,
        DeleteStreamingDistributionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
