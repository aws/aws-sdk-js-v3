import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeCommunications } from "../model/DescribeCommunications";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeCommunicationsInput } from "../types/DescribeCommunicationsInput";
import { DescribeCommunicationsOutput } from "../types/DescribeCommunicationsOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/DescribeCommunicationsInput";
export * from "../types/DescribeCommunicationsOutput";
export * from "../types/DescribeCommunicationsExceptionsUnion";

export class DescribeCommunicationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeCommunicationsInput,
      OutputTypesUnion,
      DescribeCommunicationsOutput,
      SupportResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeCommunications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCommunicationsInput,
    DescribeCommunicationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeCommunicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeCommunicationsInput,
    DescribeCommunicationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeCommunicationsInput, DescribeCommunicationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
