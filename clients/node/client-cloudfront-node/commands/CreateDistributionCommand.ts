import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateDistribution } from "../model/operations/CreateDistribution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDistributionInput } from "../types/CreateDistributionInput";
import { CreateDistributionOutput } from "../types/CreateDistributionOutput";
import { CloudFrontResolvedConfiguration } from "../CloudFrontConfiguration";
export * from "../types/CreateDistributionInput";
export * from "../types/CreateDistributionOutput";
export * from "../types/CreateDistributionExceptionsUnion";

export class CreateDistributionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDistributionInput,
      OutputTypesUnion,
      CreateDistributionOutput,
      CloudFrontResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateDistribution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDistributionInput,
    CreateDistributionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateDistributionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFrontResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDistributionInput,
    CreateDistributionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateDistributionInput, CreateDistributionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
