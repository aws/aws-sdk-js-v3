import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteRequestValidator } from "../model/DeleteRequestValidator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteRequestValidatorInput } from "../types/DeleteRequestValidatorInput";
import { DeleteRequestValidatorOutput } from "../types/DeleteRequestValidatorOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/DeleteRequestValidatorInput";
export * from "../types/DeleteRequestValidatorOutput";
export * from "../types/DeleteRequestValidatorExceptionsUnion";

export class DeleteRequestValidatorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteRequestValidatorInput,
      OutputTypesUnion,
      DeleteRequestValidatorOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteRequestValidator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteRequestValidatorInput,
    DeleteRequestValidatorOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteRequestValidatorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteRequestValidatorInput,
    DeleteRequestValidatorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteRequestValidatorInput, DeleteRequestValidatorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
