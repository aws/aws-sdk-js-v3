import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetIdentityDkimEnabled } from "../model/operations/SetIdentityDkimEnabled";
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
      _stream.Readable
    > {
  readonly model = SetIdentityDkimEnabled;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetIdentityDkimEnabledInput,
    SetIdentityDkimEnabledOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetIdentityDkimEnabledInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
