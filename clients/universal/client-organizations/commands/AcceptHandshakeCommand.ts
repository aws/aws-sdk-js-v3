import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AcceptHandshake } from "../model/AcceptHandshake";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AcceptHandshakeInput } from "../types/AcceptHandshakeInput";
import { AcceptHandshakeOutput } from "../types/AcceptHandshakeOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/AcceptHandshakeInput";
export * from "../types/AcceptHandshakeOutput";
export * from "../types/AcceptHandshakeExceptionsUnion";

export class AcceptHandshakeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AcceptHandshakeInput,
      OutputTypesUnion,
      AcceptHandshakeOutput,
      OrganizationsResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AcceptHandshake;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptHandshakeInput,
    AcceptHandshakeOutput,
    Uint8Array
  >();

  constructor(readonly input: AcceptHandshakeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<AcceptHandshakeInput, AcceptHandshakeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AcceptHandshakeInput, AcceptHandshakeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
