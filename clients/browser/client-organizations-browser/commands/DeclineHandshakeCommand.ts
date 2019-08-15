import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeclineHandshake } from "../model/operations/DeclineHandshake";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeclineHandshakeInput } from "../types/DeclineHandshakeInput";
import { DeclineHandshakeOutput } from "../types/DeclineHandshakeOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/DeclineHandshakeInput";
export * from "../types/DeclineHandshakeOutput";
export * from "../types/DeclineHandshakeExceptionsUnion";

export class DeclineHandshakeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeclineHandshakeInput,
      OutputTypesUnion,
      DeclineHandshakeOutput,
      OrganizationsResolvedConfiguration,
      Blob
    > {
  readonly model = DeclineHandshake;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeclineHandshakeInput,
    DeclineHandshakeOutput,
    Blob
  >();

  constructor(readonly input: DeclineHandshakeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeclineHandshakeInput, DeclineHandshakeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeclineHandshakeInput, DeclineHandshakeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
