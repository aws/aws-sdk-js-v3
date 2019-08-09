import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSeverityLevels } from "../model/DescribeSeverityLevels";
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
      _stream.Readable
    > {
  readonly model = DescribeSeverityLevels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSeverityLevelsInput,
    DescribeSeverityLevelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSeverityLevelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
