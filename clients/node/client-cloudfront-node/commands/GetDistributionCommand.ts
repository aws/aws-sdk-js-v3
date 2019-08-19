import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetDistribution } from "../model/operations/GetDistribution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDistributionInput } from "../types/GetDistributionInput";
import { GetDistributionOutput } from "../types/GetDistributionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/GetDistributionInput";
export * from "../types/GetDistributionOutput";
export * from "../types/GetDistributionExceptionsUnion";

export class GetDistributionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDistributionInput,
      OutputTypesUnion,
      GetDistributionOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetDistribution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDistributionInput,
    GetDistributionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetDistributionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDistributionInput, GetDistributionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDistributionInput, GetDistributionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
