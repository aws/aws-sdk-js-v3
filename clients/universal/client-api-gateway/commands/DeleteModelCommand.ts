import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteModel } from "../model/DeleteModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteModelInput } from "../types/DeleteModelInput";
import { DeleteModelOutput } from "../types/DeleteModelOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteModelInput";
export * from "../types/DeleteModelOutput";
export * from "../types/DeleteModelExceptionsUnion";

export class DeleteModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteModelInput,
      OutputTypesUnion,
      DeleteModelOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DeleteModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteModelInput,
    DeleteModelOutput,
    Uint8Array
  >();

  constructor(readonly input: DeleteModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteModelInput, DeleteModelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteModelInput, DeleteModelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
