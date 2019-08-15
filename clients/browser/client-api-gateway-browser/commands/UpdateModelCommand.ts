import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateModel } from "../model/operations/UpdateModel";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateModelInput } from "../types/UpdateModelInput";
import { UpdateModelOutput } from "../types/UpdateModelOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateModelInput";
export * from "../types/UpdateModelOutput";
export * from "../types/UpdateModelExceptionsUnion";

export class UpdateModelCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateModelInput,
      OutputTypesUnion,
      UpdateModelOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateModel;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateModelInput,
    UpdateModelOutput,
    Blob
  >();

  constructor(readonly input: UpdateModelInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateModelInput, UpdateModelOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateModelInput, UpdateModelOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
