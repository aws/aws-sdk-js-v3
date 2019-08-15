import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateByteMatchSet } from "../model/operations/UpdateByteMatchSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateByteMatchSetInput } from "../types/UpdateByteMatchSetInput";
import { UpdateByteMatchSetOutput } from "../types/UpdateByteMatchSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/UpdateByteMatchSetInput";
export * from "../types/UpdateByteMatchSetOutput";
export * from "../types/UpdateByteMatchSetExceptionsUnion";

export class UpdateByteMatchSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateByteMatchSetInput,
      OutputTypesUnion,
      UpdateByteMatchSetOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateByteMatchSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateByteMatchSetInput,
    UpdateByteMatchSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateByteMatchSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateByteMatchSetInput,
    UpdateByteMatchSetOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateByteMatchSetInput, UpdateByteMatchSetOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
