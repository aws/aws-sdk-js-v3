import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteContact } from "../model/DeleteContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteContactInput } from "../types/DeleteContactInput";
import { DeleteContactOutput } from "../types/DeleteContactOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/DeleteContactInput";
export * from "../types/DeleteContactOutput";
export * from "../types/DeleteContactExceptionsUnion";

export class DeleteContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteContactInput,
      OutputTypesUnion,
      DeleteContactOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteContactInput,
    DeleteContactOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteContactInput, DeleteContactOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteContactInput, DeleteContactOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
