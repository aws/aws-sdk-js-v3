import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetChangeToken } from "../model/GetChangeToken";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetChangeTokenInput } from "../types/GetChangeTokenInput";
import { GetChangeTokenOutput } from "../types/GetChangeTokenOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/GetChangeTokenInput";
export * from "../types/GetChangeTokenOutput";
export * from "../types/GetChangeTokenExceptionsUnion";

export class GetChangeTokenCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetChangeTokenInput,
      OutputTypesUnion,
      GetChangeTokenOutput,
      WAFResolvedConfiguration,
      Blob
    > {
  readonly model = GetChangeToken;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetChangeTokenInput,
    GetChangeTokenOutput,
    Blob
  >();

  constructor(readonly input: GetChangeTokenInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<GetChangeTokenInput, GetChangeTokenOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetChangeTokenInput, GetChangeTokenOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
