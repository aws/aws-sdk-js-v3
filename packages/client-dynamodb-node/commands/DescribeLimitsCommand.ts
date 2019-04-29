import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeLimits } from "../model/DescribeLimits";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeLimitsInput } from "../types/DescribeLimitsInput";
import { DescribeLimitsOutput } from "../types/DescribeLimitsOutput";
import { DynamoDBResolvedConfiguration } from "../DynamoDBConfiguration";
export * from "../types/DescribeLimitsInput";
export * from "../types/DescribeLimitsOutput";
export * from "../types/DescribeLimitsExceptionsUnion";

export class DescribeLimitsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeLimitsInput,
      OutputTypesUnion,
      DescribeLimitsOutput,
      DynamoDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeLimitsInput,
    DescribeLimitsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeLimitsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DynamoDBResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeLimitsInput, DescribeLimitsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: DescribeLimits
    };

    return stack.resolve(
      handler<DescribeLimitsInput, DescribeLimitsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
