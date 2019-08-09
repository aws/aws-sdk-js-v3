import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddCommunicationToCase } from "../model/AddCommunicationToCase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddCommunicationToCaseInput } from "../types/AddCommunicationToCaseInput";
import { AddCommunicationToCaseOutput } from "../types/AddCommunicationToCaseOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/AddCommunicationToCaseInput";
export * from "../types/AddCommunicationToCaseOutput";
export * from "../types/AddCommunicationToCaseExceptionsUnion";

export class AddCommunicationToCaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddCommunicationToCaseInput,
      OutputTypesUnion,
      AddCommunicationToCaseOutput,
      SupportResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddCommunicationToCase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddCommunicationToCaseInput,
    AddCommunicationToCaseOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddCommunicationToCaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddCommunicationToCaseInput,
    AddCommunicationToCaseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddCommunicationToCaseInput, AddCommunicationToCaseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
