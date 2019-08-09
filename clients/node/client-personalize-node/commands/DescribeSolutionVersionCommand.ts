import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeSolutionVersion } from "../model/DescribeSolutionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeSolutionVersionInput } from "../types/DescribeSolutionVersionInput";
import { DescribeSolutionVersionOutput } from "../types/DescribeSolutionVersionOutput";
import { PersonalizeResolvedConfiguration } from "../PersonalizeConfiguration";
export * from "../types/DescribeSolutionVersionInput";
export * from "../types/DescribeSolutionVersionOutput";
export * from "../types/DescribeSolutionVersionExceptionsUnion";

export class DescribeSolutionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeSolutionVersionInput,
      OutputTypesUnion,
      DescribeSolutionVersionOutput,
      PersonalizeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeSolutionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeSolutionVersionInput,
    DescribeSolutionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeSolutionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PersonalizeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeSolutionVersionInput,
    DescribeSolutionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeSolutionVersionInput, DescribeSolutionVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
