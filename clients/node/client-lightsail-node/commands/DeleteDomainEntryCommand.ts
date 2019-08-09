import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDomainEntry } from "../model/DeleteDomainEntry";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDomainEntryInput } from "../types/DeleteDomainEntryInput";
import { DeleteDomainEntryOutput } from "../types/DeleteDomainEntryOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteDomainEntryInput";
export * from "../types/DeleteDomainEntryOutput";
export * from "../types/DeleteDomainEntryExceptionsUnion";

export class DeleteDomainEntryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDomainEntryInput,
      OutputTypesUnion,
      DeleteDomainEntryOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDomainEntry;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDomainEntryInput,
    DeleteDomainEntryOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDomainEntryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDomainEntryInput, DeleteDomainEntryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDomainEntryInput, DeleteDomainEntryOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
