import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRequestValidators } from "../model/operations/GetRequestValidators";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRequestValidatorsInput } from "../types/GetRequestValidatorsInput";
import { GetRequestValidatorsOutput } from "../types/GetRequestValidatorsOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetRequestValidatorsInput";
export * from "../types/GetRequestValidatorsOutput";
export * from "../types/GetRequestValidatorsExceptionsUnion";

export class GetRequestValidatorsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRequestValidatorsInput,
      OutputTypesUnion,
      GetRequestValidatorsOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = GetRequestValidators;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRequestValidatorsInput,
    GetRequestValidatorsOutput,
    Blob
  >();

  constructor(readonly input: GetRequestValidatorsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRequestValidatorsInput,
    GetRequestValidatorsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRequestValidatorsInput, GetRequestValidatorsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
