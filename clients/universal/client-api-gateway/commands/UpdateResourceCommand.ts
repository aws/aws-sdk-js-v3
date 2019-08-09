import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateResource } from "../model/UpdateResource";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateResourceInput } from "../types/UpdateResourceInput";
import { UpdateResourceOutput } from "../types/UpdateResourceOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateResourceInput";
export * from "../types/UpdateResourceOutput";
export * from "../types/UpdateResourceExceptionsUnion";

export class UpdateResourceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateResourceInput,
      OutputTypesUnion,
      UpdateResourceOutput,
      APIGatewayResolvedConfiguration,
      Uint8Array
    > {
  readonly model = UpdateResource;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateResourceInput,
    UpdateResourceOutput,
    Uint8Array
  >();

  constructor(readonly input: UpdateResourceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateResourceInput, UpdateResourceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateResourceInput, UpdateResourceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
