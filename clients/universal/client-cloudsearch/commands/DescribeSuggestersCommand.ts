import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSuggesters } from "../model/DescribeSuggesters";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSuggestersInput } from "../types/DescribeSuggestersInput";
import { DescribeSuggestersOutput } from "../types/DescribeSuggestersOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
export * from "../types/DescribeSuggestersInput";
export * from "../types/DescribeSuggestersOutput";
export * from "../types/DescribeSuggestersExceptionsUnion";

export class DescribeSuggestersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSuggestersInput,
      OutputTypesUnion,
      DescribeSuggestersOutput,
      CloudSearchResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeSuggesters;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSuggestersInput,
    DescribeSuggestersOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeSuggestersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudSearchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSuggestersInput,
    DescribeSuggestersOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSuggestersInput, DescribeSuggestersOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
