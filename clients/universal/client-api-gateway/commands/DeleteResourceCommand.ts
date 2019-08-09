import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteResource } from "../model/DeleteResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResourceInput } from "../types/DeleteResourceInput";
import { DeleteResourceOutput } from "../types/DeleteResourceOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteResourceInput";
export * from "../types/DeleteResourceOutput";
export * from "../types/DeleteResourceExceptionsUnion";

export class DeleteResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteResourceInput,
      OutputTypesUnion,
      DeleteResourceOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResourceInput,
    DeleteResourceOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteResourceInput, DeleteResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteResourceInput, DeleteResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
