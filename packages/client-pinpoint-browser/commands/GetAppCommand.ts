import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApp } from "../model/GetApp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAppInput } from "../types/GetAppInput";
import { GetAppOutput } from "../types/GetAppOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
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
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAppInput,
    GetAppOutput,
    Blob
  >();

  constructor(readonly input: GetAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetAppInput, GetAppOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: GetApp
    };

    return stack.resolve(
      handler<GetAppInput, GetAppOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
