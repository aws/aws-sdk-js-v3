import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteAuthorizer } from "../model/operations/DeleteAuthorizer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteAuthorizerInput } from "../types/DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "../types/DeleteAuthorizerOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteAuthorizerInput";
export * from "../types/DeleteAuthorizerOutput";
export * from "../types/DeleteAuthorizerExceptionsUnion";

export class DeleteAuthorizerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteAuthorizerInput,
      OutputTypesUnion,
      DeleteAuthorizerOutput,
      IoTResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteAuthorizer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteAuthorizerInput,
    DeleteAuthorizerOutput,
    Blob
  >();

  constructor(readonly input: DeleteAuthorizerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteAuthorizerInput, DeleteAuthorizerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteAuthorizerInput, DeleteAuthorizerOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
