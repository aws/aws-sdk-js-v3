import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetActiveNames } from "../model/GetActiveNames";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetActiveNamesInput } from "../types/GetActiveNamesInput";
import { GetActiveNamesOutput } from "../types/GetActiveNamesOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetActiveNamesInput";
export * from "../types/GetActiveNamesOutput";
export * from "../types/GetActiveNamesExceptionsUnion";

export class GetActiveNamesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetActiveNamesInput,
      OutputTypesUnion,
      GetActiveNamesOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetActiveNames;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetActiveNamesInput,
    GetActiveNamesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetActiveNamesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetActiveNamesInput, GetActiveNamesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetActiveNamesInput, GetActiveNamesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
