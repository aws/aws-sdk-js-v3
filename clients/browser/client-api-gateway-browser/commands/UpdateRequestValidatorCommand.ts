import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateRequestValidator } from "../model/operations/UpdateRequestValidator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRequestValidatorInput } from "../types/UpdateRequestValidatorInput";
import { UpdateRequestValidatorOutput } from "../types/UpdateRequestValidatorOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateRequestValidatorInput";
export * from "../types/UpdateRequestValidatorOutput";
export * from "../types/UpdateRequestValidatorExceptionsUnion";

export class UpdateRequestValidatorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRequestValidatorInput,
      OutputTypesUnion,
      UpdateRequestValidatorOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateRequestValidator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRequestValidatorInput,
    UpdateRequestValidatorOutput,
    Blob
  >();

  constructor(readonly input: UpdateRequestValidatorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateRequestValidatorInput,
    UpdateRequestValidatorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRequestValidatorInput, UpdateRequestValidatorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
