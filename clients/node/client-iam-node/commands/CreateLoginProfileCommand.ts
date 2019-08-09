import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLoginProfile } from "../model/CreateLoginProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLoginProfileInput } from "../types/CreateLoginProfileInput";
import { CreateLoginProfileOutput } from "../types/CreateLoginProfileOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreateLoginProfileInput";
export * from "../types/CreateLoginProfileOutput";
export * from "../types/CreateLoginProfileExceptionsUnion";

export class CreateLoginProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLoginProfileInput,
      OutputTypesUnion,
      CreateLoginProfileOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLoginProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLoginProfileInput,
    CreateLoginProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLoginProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLoginProfileInput,
    CreateLoginProfileOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLoginProfileInput, CreateLoginProfileOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
