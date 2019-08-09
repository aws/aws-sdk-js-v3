import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMasterAccount } from "../model/GetMasterAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMasterAccountInput } from "../types/GetMasterAccountInput";
import { GetMasterAccountOutput } from "../types/GetMasterAccountOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/GetMasterAccountInput";
export * from "../types/GetMasterAccountOutput";
export * from "../types/GetMasterAccountExceptionsUnion";

export class GetMasterAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMasterAccountInput,
      OutputTypesUnion,
      GetMasterAccountOutput,
      GuardDutyResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMasterAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMasterAccountInput,
    GetMasterAccountOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMasterAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMasterAccountInput, GetMasterAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMasterAccountInput, GetMasterAccountOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
