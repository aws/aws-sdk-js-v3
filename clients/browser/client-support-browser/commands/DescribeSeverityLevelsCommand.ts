import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeSeverityLevels } from "../model/operations/DescribeSeverityLevels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSeverityLevelsInput } from "../types/DescribeSeverityLevelsInput";
import { DescribeSeverityLevelsOutput } from "../types/DescribeSeverityLevelsOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/DescribeSeverityLevelsInput";
export * from "../types/DescribeSeverityLevelsOutput";
export * from "../types/DescribeSeverityLevelsExceptionsUnion";

export class DescribeSeverityLevelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSeverityLevelsInput,
      OutputTypesUnion,
      DescribeSeverityLevelsOutput,
      SupportResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeSeverityLevels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSeverityLevelsInput,
    DescribeSeverityLevelsOutput,
    Blob
  >();

  constructor(readonly input: DescribeSeverityLevelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSeverityLevelsInput,
    DescribeSeverityLevelsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSeverityLevelsInput, DescribeSeverityLevelsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
