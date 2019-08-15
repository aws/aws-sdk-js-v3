import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetIdentityPoolConfiguration } from "../model/operations/GetIdentityPoolConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIdentityPoolConfigurationInput } from "../types/GetIdentityPoolConfigurationInput";
import { GetIdentityPoolConfigurationOutput } from "../types/GetIdentityPoolConfigurationOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/GetIdentityPoolConfigurationInput";
export * from "../types/GetIdentityPoolConfigurationOutput";
export * from "../types/GetIdentityPoolConfigurationExceptionsUnion";

export class GetIdentityPoolConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIdentityPoolConfigurationInput,
      OutputTypesUnion,
      GetIdentityPoolConfigurationOutput,
      CognitoSyncResolvedConfiguration,
      Blob
    > {
  readonly model = GetIdentityPoolConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIdentityPoolConfigurationInput,
    GetIdentityPoolConfigurationOutput,
    Blob
  >();

  constructor(readonly input: GetIdentityPoolConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetIdentityPoolConfigurationInput,
    GetIdentityPoolConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetIdentityPoolConfigurationInput,
        GetIdentityPoolConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
