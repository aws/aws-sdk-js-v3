import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateContact } from "../model/UpdateContact";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateContactInput } from "../types/UpdateContactInput";
import { UpdateContactOutput } from "../types/UpdateContactOutput";
import { AlexaForBusinessResolvedConfiguration } from "../AlexaForBusinessConfiguration";
export * from "../types/UpdateContactInput";
export * from "../types/UpdateContactOutput";
export * from "../types/UpdateContactExceptionsUnion";

export class UpdateContactCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateContactInput,
      OutputTypesUnion,
      UpdateContactOutput,
      AlexaForBusinessResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateContact;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateContactInput,
    UpdateContactOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateContactInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AlexaForBusinessResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateContactInput, UpdateContactOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateContactInput, UpdateContactOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
