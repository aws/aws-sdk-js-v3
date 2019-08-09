import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateMethodResponse } from "../model/UpdateMethodResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMethodResponseInput } from "../types/UpdateMethodResponseInput";
import { UpdateMethodResponseOutput } from "../types/UpdateMethodResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateMethodResponseInput";
export * from "../types/UpdateMethodResponseOutput";
export * from "../types/UpdateMethodResponseExceptionsUnion";

export class UpdateMethodResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMethodResponseInput,
      OutputTypesUnion,
      UpdateMethodResponseOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateMethodResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMethodResponseInput,
    UpdateMethodResponseOutput,
    Blob
  >();

  constructor(readonly input: UpdateMethodResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMethodResponseInput,
    UpdateMethodResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMethodResponseInput, UpdateMethodResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
