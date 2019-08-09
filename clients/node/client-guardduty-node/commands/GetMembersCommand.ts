import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMembers } from "../model/GetMembers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMembersInput } from "../types/GetMembersInput";
import { GetMembersOutput } from "../types/GetMembersOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/GetMembersInput";
export * from "../types/GetMembersOutput";
export * from "../types/GetMembersExceptionsUnion";

export class GetMembersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMembersInput,
      OutputTypesUnion,
      GetMembersOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMembers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMembersInput,
    GetMembersOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMembersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMembersInput, GetMembersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMembersInput, GetMembersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
