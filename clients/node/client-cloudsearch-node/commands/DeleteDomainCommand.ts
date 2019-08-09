import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteDomain } from "../model/DeleteDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteDomainInput } from "../types/DeleteDomainInput";
import { DeleteDomainOutput } from "../types/DeleteDomainOutput";
import { CloudSearchResolvedConfiguration } from "../CloudSearchConfiguration";
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
      CloudSearchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteDomainInput,
    DeleteDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudSearchResolvedConfiguration
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
