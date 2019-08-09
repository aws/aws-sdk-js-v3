import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteIPSet } from "../model/DeleteIPSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteIPSetInput } from "../types/DeleteIPSetInput";
import { DeleteIPSetOutput } from "../types/DeleteIPSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/DeleteIPSetInput";
export * from "../types/DeleteIPSetOutput";
export * from "../types/DeleteIPSetExceptionsUnion";

export class DeleteIPSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteIPSetInput,
      OutputTypesUnion,
      DeleteIPSetOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteIPSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteIPSetInput,
    DeleteIPSetOutput,
    Blob
  >();

  constructor(readonly input: DeleteIPSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteIPSetInput, DeleteIPSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteIPSetInput, DeleteIPSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
