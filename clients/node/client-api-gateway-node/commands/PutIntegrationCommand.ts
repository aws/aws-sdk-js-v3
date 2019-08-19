import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutIntegration } from "../model/operations/PutIntegration";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutIntegrationInput } from "../types/PutIntegrationInput";
import { PutIntegrationOutput } from "../types/PutIntegrationOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/PutIntegrationInput";
export * from "../types/PutIntegrationOutput";
export * from "../types/PutIntegrationExceptionsUnion";

export class PutIntegrationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutIntegrationInput,
      OutputTypesUnion,
      PutIntegrationOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutIntegration;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutIntegrationInput,
    PutIntegrationOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutIntegrationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<PutIntegrationInput, PutIntegrationOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutIntegrationInput, PutIntegrationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
