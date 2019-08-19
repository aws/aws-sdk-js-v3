import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteDomain } from "../model/operations/DeleteDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDomainInput } from "../types/DeleteDomainInput";
import { DeleteDomainOutput } from "../types/DeleteDomainOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteDomainInput";
export * from "../types/DeleteDomainOutput";
export * from "../types/DeleteDomainExceptionsUnion";

export class DeleteDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteDomainInput,
      OutputTypesUnion,
      DeleteDomainOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDomainInput,
    DeleteDomainOutput,
    Blob
  >();

  constructor(readonly input: DeleteDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteDomainInput, DeleteDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteDomainInput, DeleteDomainOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
