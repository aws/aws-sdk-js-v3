import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRequestValidator } from "../model/GetRequestValidator";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRequestValidatorInput } from "../types/GetRequestValidatorInput";
import { GetRequestValidatorOutput } from "../types/GetRequestValidatorOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetRequestValidatorInput";
export * from "../types/GetRequestValidatorOutput";
export * from "../types/GetRequestValidatorExceptionsUnion";

export class GetRequestValidatorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRequestValidatorInput,
      OutputTypesUnion,
      GetRequestValidatorOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRequestValidator;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRequestValidatorInput,
    GetRequestValidatorOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRequestValidatorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRequestValidatorInput,
    GetRequestValidatorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRequestValidatorInput, GetRequestValidatorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
