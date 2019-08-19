import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMethod } from "../model/operations/DeleteMethod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMethodInput } from "../types/DeleteMethodInput";
import { DeleteMethodOutput } from "../types/DeleteMethodOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteMethodInput";
export * from "../types/DeleteMethodOutput";
export * from "../types/DeleteMethodExceptionsUnion";

export class DeleteMethodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMethodInput,
      OutputTypesUnion,
      DeleteMethodOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteMethod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMethodInput,
    DeleteMethodOutput,
    Blob
  >();

  constructor(readonly input: DeleteMethodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteMethodInput, DeleteMethodOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMethodInput, DeleteMethodOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
