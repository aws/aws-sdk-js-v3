import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetApp } from "../model/operations/GetApp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAppInput } from "../types/GetAppInput";
import { GetAppOutput } from "../types/GetAppOutput";
import { AmplifyResolvedConfiguration } from "../AmplifyConfiguration";
export * from "../types/GetAppInput";
export * from "../types/GetAppOutput";
export * from "../types/GetAppExceptionsUnion";

export class GetAppCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAppInput,
      OutputTypesUnion,
      GetAppOutput,
      AmplifyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetApp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAppInput,
    GetAppOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AmplifyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAppInput, GetAppOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetAppInput, GetAppOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
