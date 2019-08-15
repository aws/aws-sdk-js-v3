import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInvitationsCount } from "../model/operations/GetInvitationsCount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInvitationsCountInput } from "../types/GetInvitationsCountInput";
import { GetInvitationsCountOutput } from "../types/GetInvitationsCountOutput";
import { SecurityHubResolvedConfiguration } from "../SecurityHubConfiguration";
export * from "../types/GetInvitationsCountInput";
export * from "../types/GetInvitationsCountOutput";
export * from "../types/GetInvitationsCountExceptionsUnion";

export class GetInvitationsCountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInvitationsCountInput,
      OutputTypesUnion,
      GetInvitationsCountOutput,
      SecurityHubResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetInvitationsCount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInvitationsCountInput,
    GetInvitationsCountOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInvitationsCountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SecurityHubResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetInvitationsCountInput,
    GetInvitationsCountOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInvitationsCountInput, GetInvitationsCountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
