import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateByteMatchSet } from "../model/CreateByteMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateByteMatchSetInput } from "../types/CreateByteMatchSetInput";
import { CreateByteMatchSetOutput } from "../types/CreateByteMatchSetOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateByteMatchSetInput";
export * from "../types/CreateByteMatchSetOutput";
export * from "../types/CreateByteMatchSetExceptionsUnion";

export class CreateByteMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateByteMatchSetInput,
      OutputTypesUnion,
      CreateByteMatchSetOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = CreateByteMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateByteMatchSetInput,
    CreateByteMatchSetOutput,
    Blob
  >();

  constructor(readonly input: CreateByteMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateByteMatchSetInput,
    CreateByteMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateByteMatchSetInput, CreateByteMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
