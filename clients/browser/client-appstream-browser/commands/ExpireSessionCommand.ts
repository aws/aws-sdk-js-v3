import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ExpireSession } from "../model/ExpireSession";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ExpireSessionInput } from "../types/ExpireSessionInput";
import { ExpireSessionOutput } from "../types/ExpireSessionOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/ExpireSessionInput";
export * from "../types/ExpireSessionOutput";
export * from "../types/ExpireSessionExceptionsUnion";

export class ExpireSessionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ExpireSessionInput,
      OutputTypesUnion,
      ExpireSessionOutput,
      AppStreamResolvedConfiguration,
      Blob
    > {
  readonly model = ExpireSession;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ExpireSessionInput,
    ExpireSessionOutput,
    Blob
  >();

  constructor(readonly input: ExpireSessionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<ExpireSessionInput, ExpireSessionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ExpireSessionInput, ExpireSessionOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
