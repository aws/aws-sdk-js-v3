import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetId } from "../model/GetId";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdInput } from "../types/GetIdInput";
import { GetIdOutput } from "../types/GetIdOutput";
import { CognitoIdentityResolvedConfiguration } from "../CognitoIdentityConfiguration";
export * from "../types/GetIdInput";
export * from "../types/GetIdOutput";
export * from "../types/GetIdExceptionsUnion";

export class GetIdCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdInput,
      OutputTypesUnion,
      GetIdOutput,
      CognitoIdentityResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetId;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdInput,
    GetIdOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetIdInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoIdentityResolvedConfiguration
  ): __aws_sdk_types.Handler<GetIdInput, GetIdOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIdInput, GetIdOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
