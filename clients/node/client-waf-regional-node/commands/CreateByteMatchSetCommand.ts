import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateByteMatchSet } from "../model/CreateByteMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateByteMatchSetInput } from "../types/CreateByteMatchSetInput";
import { CreateByteMatchSetOutput } from "../types/CreateByteMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
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
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateByteMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateByteMatchSetInput,
    CreateByteMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateByteMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
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
