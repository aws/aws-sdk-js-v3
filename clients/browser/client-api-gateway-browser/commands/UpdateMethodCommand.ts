import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMethod } from "../model/operations/UpdateMethod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMethodInput } from "../types/UpdateMethodInput";
import { UpdateMethodOutput } from "../types/UpdateMethodOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateMethodInput";
export * from "../types/UpdateMethodOutput";
export * from "../types/UpdateMethodExceptionsUnion";

export class UpdateMethodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMethodInput,
      OutputTypesUnion,
      UpdateMethodOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateMethod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMethodInput,
    UpdateMethodOutput,
    Blob
  >();

  constructor(readonly input: UpdateMethodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateMethodInput, UpdateMethodOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMethodInput, UpdateMethodOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
