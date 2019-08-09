import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = AcceptHandshake;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AcceptHandshakeInput,
    AcceptHandshakeOutput,
    _stream.Readable
  >();

  constructor(readonly input: AcceptHandshakeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
