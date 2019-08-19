import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisassociateDelegateFromResource } from "../model/operations/DisassociateDelegateFromResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateDelegateFromResourceInput } from "../types/DisassociateDelegateFromResourceInput";
import { DisassociateDelegateFromResourceOutput } from "../types/DisassociateDelegateFromResourceOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/DisassociateDelegateFromResourceInput";
export * from "../types/DisassociateDelegateFromResourceOutput";
export * from "../types/DisassociateDelegateFromResourceExceptionsUnion";

export class DisassociateDelegateFromResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateDelegateFromResourceInput,
      OutputTypesUnion,
      DisassociateDelegateFromResourceOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = DisassociateDelegateFromResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateDelegateFromResourceInput,
    DisassociateDelegateFromResourceOutput,
    Blob
  >();

  constructor(readonly input: DisassociateDelegateFromResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateDelegateFromResourceInput,
    DisassociateDelegateFromResourceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DisassociateDelegateFromResourceInput,
        DisassociateDelegateFromResourceOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
