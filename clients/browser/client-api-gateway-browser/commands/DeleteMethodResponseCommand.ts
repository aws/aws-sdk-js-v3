import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteMethodResponse } from "../model/DeleteMethodResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteMethodResponseInput } from "../types/DeleteMethodResponseInput";
import { DeleteMethodResponseOutput } from "../types/DeleteMethodResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteMethodResponseInput";
export * from "../types/DeleteMethodResponseOutput";
export * from "../types/DeleteMethodResponseExceptionsUnion";

export class DeleteMethodResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteMethodResponseInput,
      OutputTypesUnion,
      DeleteMethodResponseOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteMethodResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMethodResponseInput,
    DeleteMethodResponseOutput,
    Blob
  >();

  constructor(readonly input: DeleteMethodResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteMethodResponseInput,
    DeleteMethodResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteMethodResponseInput, DeleteMethodResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
