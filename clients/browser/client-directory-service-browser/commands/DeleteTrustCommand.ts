import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTrust } from "../model/DeleteTrust";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTrustInput } from "../types/DeleteTrustInput";
import { DeleteTrustOutput } from "../types/DeleteTrustOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DeleteTrustInput";
export * from "../types/DeleteTrustOutput";
export * from "../types/DeleteTrustExceptionsUnion";

export class DeleteTrustCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTrustInput,
      OutputTypesUnion,
      DeleteTrustOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTrust;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrustInput,
    DeleteTrustOutput,
    Blob
  >();

  constructor(readonly input: DeleteTrustInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteTrustInput, DeleteTrustOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteTrustInput, DeleteTrustOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
