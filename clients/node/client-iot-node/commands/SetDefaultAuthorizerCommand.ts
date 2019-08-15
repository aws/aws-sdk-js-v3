import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetDefaultAuthorizer } from "../model/operations/SetDefaultAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetDefaultAuthorizerInput } from "../types/SetDefaultAuthorizerInput";
import { SetDefaultAuthorizerOutput } from "../types/SetDefaultAuthorizerOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/SetDefaultAuthorizerInput";
export * from "../types/SetDefaultAuthorizerOutput";
export * from "../types/SetDefaultAuthorizerExceptionsUnion";

export class SetDefaultAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetDefaultAuthorizerInput,
      OutputTypesUnion,
      SetDefaultAuthorizerOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetDefaultAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetDefaultAuthorizerInput,
    SetDefaultAuthorizerOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetDefaultAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetDefaultAuthorizerInput,
    SetDefaultAuthorizerOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetDefaultAuthorizerInput, SetDefaultAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
