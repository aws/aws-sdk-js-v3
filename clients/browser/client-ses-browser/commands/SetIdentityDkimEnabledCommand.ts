import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { SetIdentityDkimEnabled } from "../model/SetIdentityDkimEnabled";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetIdentityDkimEnabledInput } from "../types/SetIdentityDkimEnabledInput";
import { SetIdentityDkimEnabledOutput } from "../types/SetIdentityDkimEnabledOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/SetIdentityDkimEnabledInput";
export * from "../types/SetIdentityDkimEnabledOutput";
export * from "../types/SetIdentityDkimEnabledExceptionsUnion";

export class SetIdentityDkimEnabledCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetIdentityDkimEnabledInput,
      OutputTypesUnion,
      SetIdentityDkimEnabledOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = SetIdentityDkimEnabled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIdentityDkimEnabledInput,
    SetIdentityDkimEnabledOutput,
    Blob
  >();

  constructor(readonly input: SetIdentityDkimEnabledInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetIdentityDkimEnabledInput,
    SetIdentityDkimEnabledOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetIdentityDkimEnabledInput, SetIdentityDkimEnabledOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
