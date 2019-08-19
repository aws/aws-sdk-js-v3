import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDomainEntry } from "../model/operations/DeleteDomainEntry";
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
      Blob
    > {
  readonly model = DeleteDomainEntry;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDomainEntryInput,
    DeleteDomainEntryOutput,
    Blob
  >();

  constructor(readonly input: DeleteDomainEntryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
