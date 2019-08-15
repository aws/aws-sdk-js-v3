import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeCommunications } from "../model/operations/DescribeCommunications";
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
      Blob
    > {
  readonly model = DescribeCommunications;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeCommunicationsInput,
    DescribeCommunicationsOutput,
    Blob
  >();

  constructor(readonly input: DescribeCommunicationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
