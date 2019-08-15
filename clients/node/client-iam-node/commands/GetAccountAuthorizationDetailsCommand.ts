import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetAccountAuthorizationDetails } from "../model/operations/GetAccountAuthorizationDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetAccountAuthorizationDetailsInput } from "../types/GetAccountAuthorizationDetailsInput";
import { GetAccountAuthorizationDetailsOutput } from "../types/GetAccountAuthorizationDetailsOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetAccountAuthorizationDetailsInput";
export * from "../types/GetAccountAuthorizationDetailsOutput";
export * from "../types/GetAccountAuthorizationDetailsExceptionsUnion";

export class GetAccountAuthorizationDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetAccountAuthorizationDetailsInput,
      OutputTypesUnion,
      GetAccountAuthorizationDetailsOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetAccountAuthorizationDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetAccountAuthorizationDetailsInput,
    GetAccountAuthorizationDetailsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetAccountAuthorizationDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetAccountAuthorizationDetailsInput,
    GetAccountAuthorizationDetailsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetAccountAuthorizationDetailsInput,
        GetAccountAuthorizationDetailsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
