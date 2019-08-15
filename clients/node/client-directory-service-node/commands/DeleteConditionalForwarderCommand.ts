import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteConditionalForwarder } from "../model/operations/DeleteConditionalForwarder";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteConditionalForwarderInput } from "../types/DeleteConditionalForwarderInput";
import { DeleteConditionalForwarderOutput } from "../types/DeleteConditionalForwarderOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DeleteConditionalForwarderInput";
export * from "../types/DeleteConditionalForwarderOutput";
export * from "../types/DeleteConditionalForwarderExceptionsUnion";

export class DeleteConditionalForwarderCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteConditionalForwarderInput,
      OutputTypesUnion,
      DeleteConditionalForwarderOutput,
      DirectoryServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteConditionalForwarder;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteConditionalForwarderInput,
    DeleteConditionalForwarderOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteConditionalForwarderInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteConditionalForwarderInput,
    DeleteConditionalForwarderOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteConditionalForwarderInput,
        DeleteConditionalForwarderOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
