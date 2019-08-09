import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutRestApi } from "../model/PutRestApi";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutRestApiInput } from "../types/PutRestApiInput";
import { PutRestApiOutput } from "../types/PutRestApiOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/PutRestApiInput";
export * from "../types/PutRestApiOutput";
export * from "../types/PutRestApiExceptionsUnion";

export class PutRestApiCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutRestApiInput,
      OutputTypesUnion,
      PutRestApiOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = PutRestApi;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutRestApiInput,
    PutRestApiOutput,
    Blob
  >();

  constructor(readonly input: PutRestApiInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<PutRestApiInput, PutRestApiOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutRestApiInput, PutRestApiOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
