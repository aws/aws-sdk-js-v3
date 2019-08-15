import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetIdentityPoolConfiguration } from "../model/operations/SetIdentityPoolConfiguration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetIdentityPoolConfigurationInput } from "../types/SetIdentityPoolConfigurationInput";
import { SetIdentityPoolConfigurationOutput } from "../types/SetIdentityPoolConfigurationOutput";
import { CognitoSyncResolvedConfiguration } from "../CognitoSyncConfiguration";
export * from "../types/SetIdentityPoolConfigurationInput";
export * from "../types/SetIdentityPoolConfigurationOutput";
export * from "../types/SetIdentityPoolConfigurationExceptionsUnion";

export class SetIdentityPoolConfigurationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetIdentityPoolConfigurationInput,
      OutputTypesUnion,
      SetIdentityPoolConfigurationOutput,
      CognitoSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetIdentityPoolConfiguration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIdentityPoolConfigurationInput,
    SetIdentityPoolConfigurationOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetIdentityPoolConfigurationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CognitoSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetIdentityPoolConfigurationInput,
    SetIdentityPoolConfigurationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SetIdentityPoolConfigurationInput,
        SetIdentityPoolConfigurationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
