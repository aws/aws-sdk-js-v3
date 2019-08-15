import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyAccount } from "../model/operations/ModifyAccount";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyAccountInput } from "../types/ModifyAccountInput";
import { ModifyAccountOutput } from "../types/ModifyAccountOutput";
import { WorkSpacesResolvedConfiguration } from "../WorkSpacesConfiguration";
export * from "../types/ModifyAccountInput";
export * from "../types/ModifyAccountOutput";
export * from "../types/ModifyAccountExceptionsUnion";

export class ModifyAccountCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyAccountInput,
      OutputTypesUnion,
      ModifyAccountOutput,
      WorkSpacesResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyAccount;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyAccountInput,
    ModifyAccountOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyAccountInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkSpacesResolvedConfiguration
  ): __aws_sdk_types.Handler<ModifyAccountInput, ModifyAccountOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyAccountInput, ModifyAccountOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
