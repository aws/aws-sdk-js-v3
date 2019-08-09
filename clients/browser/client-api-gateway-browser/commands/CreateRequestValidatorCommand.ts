import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateRequestValidator } from "../model/CreateRequestValidator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRequestValidatorInput } from "../types/CreateRequestValidatorInput";
import { CreateRequestValidatorOutput } from "../types/CreateRequestValidatorOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/CreateRequestValidatorInput";
export * from "../types/CreateRequestValidatorOutput";
export * from "../types/CreateRequestValidatorExceptionsUnion";

export class CreateRequestValidatorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRequestValidatorInput,
      OutputTypesUnion,
      CreateRequestValidatorOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = CreateRequestValidator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRequestValidatorInput,
    CreateRequestValidatorOutput,
    Blob
  >();

  constructor(readonly input: CreateRequestValidatorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateRequestValidatorInput,
    CreateRequestValidatorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRequestValidatorInput, CreateRequestValidatorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
