import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDistribution } from "../model/operations/DeleteDistribution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDistributionInput } from "../types/DeleteDistributionInput";
import { DeleteDistributionOutput } from "../types/DeleteDistributionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/DeleteDistributionInput";
export * from "../types/DeleteDistributionOutput";
export * from "../types/DeleteDistributionExceptionsUnion";

export class DeleteDistributionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDistributionInput,
      OutputTypesUnion,
      DeleteDistributionOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDistribution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDistributionInput,
    DeleteDistributionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDistributionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteDistributionInput,
    DeleteDistributionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDistributionInput, DeleteDistributionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
