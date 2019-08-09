import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetByteMatchSet } from "../model/GetByteMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetByteMatchSetInput } from "../types/GetByteMatchSetInput";
import { GetByteMatchSetOutput } from "../types/GetByteMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetByteMatchSetInput";
export * from "../types/GetByteMatchSetOutput";
export * from "../types/GetByteMatchSetExceptionsUnion";

export class GetByteMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetByteMatchSetInput,
      OutputTypesUnion,
      GetByteMatchSetOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = GetByteMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetByteMatchSetInput,
    GetByteMatchSetOutput,
    Blob
  >();

  constructor(readonly input: GetByteMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<GetByteMatchSetInput, GetByteMatchSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetByteMatchSetInput, GetByteMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
