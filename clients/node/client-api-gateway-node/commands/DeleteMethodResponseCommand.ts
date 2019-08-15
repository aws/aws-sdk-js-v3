import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteMethodResponse } from "../model/operations/DeleteMethodResponse";
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
      _stream.Readable
    > {
  readonly model = DeleteMethodResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteMethodResponseInput,
    DeleteMethodResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteMethodResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
