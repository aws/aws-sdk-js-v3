import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelArchival } from "../model/operations/CancelArchival";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelArchivalInput } from "../types/CancelArchivalInput";
import { CancelArchivalOutput } from "../types/CancelArchivalOutput";
import { StorageGatewayResolvedConfiguration } from "../StorageGatewayConfiguration";
export * from "../types/CancelArchivalInput";
export * from "../types/CancelArchivalOutput";
export * from "../types/CancelArchivalExceptionsUnion";

export class CancelArchivalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelArchivalInput,
      OutputTypesUnion,
      CancelArchivalOutput,
      StorageGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelArchival;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelArchivalInput,
    CancelArchivalOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelArchivalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: StorageGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelArchivalInput, CancelArchivalOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelArchivalInput, CancelArchivalOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
