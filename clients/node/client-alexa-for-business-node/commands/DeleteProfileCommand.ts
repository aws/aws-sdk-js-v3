import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteProfile } from "../model/operations/DeleteProfile";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteProfileInput } from "../types/DeleteProfileInput";
import { DeleteProfileOutput } from "../types/DeleteProfileOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteProfileInput";
export * from "../types/DeleteProfileOutput";
export * from "../types/DeleteProfileExceptionsUnion";

export class DeleteProfileCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteProfileInput,
      OutputTypesUnion,
      DeleteProfileOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteProfile;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteProfileInput,
    DeleteProfileOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteProfileInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteProfileInput, DeleteProfileOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteProfileInput, DeleteProfileOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
