import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRelationalDatabaseMasterUserPassword } from "../model/GetRelationalDatabaseMasterUserPassword";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRelationalDatabaseMasterUserPasswordInput } from "../types/GetRelationalDatabaseMasterUserPasswordInput";
import { GetRelationalDatabaseMasterUserPasswordOutput } from "../types/GetRelationalDatabaseMasterUserPasswordOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRelationalDatabaseMasterUserPasswordInput";
export * from "../types/GetRelationalDatabaseMasterUserPasswordOutput";
export * from "../types/GetRelationalDatabaseMasterUserPasswordExceptionsUnion";

export class GetRelationalDatabaseMasterUserPasswordCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRelationalDatabaseMasterUserPasswordInput,
      OutputTypesUnion,
      GetRelationalDatabaseMasterUserPasswordOutput,
      LightsailResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetRelationalDatabaseMasterUserPassword;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRelationalDatabaseMasterUserPasswordInput,
    GetRelationalDatabaseMasterUserPasswordOutput,
    Uint8Array
  >();

  constructor(readonly input: GetRelationalDatabaseMasterUserPasswordInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRelationalDatabaseMasterUserPasswordInput,
    GetRelationalDatabaseMasterUserPasswordOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRelationalDatabaseMasterUserPasswordInput,
        GetRelationalDatabaseMasterUserPasswordOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
