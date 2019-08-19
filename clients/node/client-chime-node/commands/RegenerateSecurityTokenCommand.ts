import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegenerateSecurityToken } from "../model/operations/RegenerateSecurityToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegenerateSecurityTokenInput } from "../types/RegenerateSecurityTokenInput";
import { RegenerateSecurityTokenOutput } from "../types/RegenerateSecurityTokenOutput";
import { ChimeResolvedConfiguration } from "../ChimeConfiguration";
export * from "../types/RegenerateSecurityTokenInput";
export * from "../types/RegenerateSecurityTokenOutput";
export * from "../types/RegenerateSecurityTokenExceptionsUnion";

export class RegenerateSecurityTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegenerateSecurityTokenInput,
      OutputTypesUnion,
      RegenerateSecurityTokenOutput,
      ChimeResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegenerateSecurityToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegenerateSecurityTokenInput,
    RegenerateSecurityTokenOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegenerateSecurityTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ChimeResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegenerateSecurityTokenInput,
    RegenerateSecurityTokenOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegenerateSecurityTokenInput, RegenerateSecurityTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
