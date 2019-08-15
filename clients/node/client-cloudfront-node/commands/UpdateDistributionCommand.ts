import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDistribution } from "../model/operations/UpdateDistribution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDistributionInput } from "../types/UpdateDistributionInput";
import { UpdateDistributionOutput } from "../types/UpdateDistributionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/UpdateDistributionInput";
export * from "../types/UpdateDistributionOutput";
export * from "../types/UpdateDistributionExceptionsUnion";

export class UpdateDistributionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDistributionInput,
      OutputTypesUnion,
      UpdateDistributionOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDistribution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDistributionInput,
    UpdateDistributionOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDistributionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDistributionInput,
    UpdateDistributionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDistributionInput, UpdateDistributionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
