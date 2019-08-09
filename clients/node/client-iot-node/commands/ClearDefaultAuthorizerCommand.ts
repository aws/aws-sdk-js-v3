import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ClearDefaultAuthorizer } from "../model/ClearDefaultAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ClearDefaultAuthorizerInput } from "../types/ClearDefaultAuthorizerInput";
import { ClearDefaultAuthorizerOutput } from "../types/ClearDefaultAuthorizerOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/ClearDefaultAuthorizerInput";
export * from "../types/ClearDefaultAuthorizerOutput";
export * from "../types/ClearDefaultAuthorizerExceptionsUnion";

export class ClearDefaultAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ClearDefaultAuthorizerInput,
      OutputTypesUnion,
      ClearDefaultAuthorizerOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ClearDefaultAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ClearDefaultAuthorizerInput,
    ClearDefaultAuthorizerOutput,
    _stream.Readable
  >();

  constructor(readonly input: ClearDefaultAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ClearDefaultAuthorizerInput,
    ClearDefaultAuthorizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ClearDefaultAuthorizerInput, ClearDefaultAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
