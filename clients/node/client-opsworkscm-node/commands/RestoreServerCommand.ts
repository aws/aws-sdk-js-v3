import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RestoreServer } from "../model/RestoreServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreServerInput } from "../types/RestoreServerInput";
import { RestoreServerOutput } from "../types/RestoreServerOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/RestoreServerInput";
export * from "../types/RestoreServerOutput";
export * from "../types/RestoreServerExceptionsUnion";

export class RestoreServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreServerInput,
      OutputTypesUnion,
      RestoreServerOutput,
      OpsWorksCMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RestoreServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreServerInput,
    RestoreServerOutput,
    _stream.Readable
  >();

  constructor(readonly input: RestoreServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<RestoreServerInput, RestoreServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RestoreServerInput, RestoreServerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
