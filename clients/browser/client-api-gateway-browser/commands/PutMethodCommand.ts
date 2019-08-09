import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutMethod } from "../model/PutMethod";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutMethodInput } from "../types/PutMethodInput";
import { PutMethodOutput } from "../types/PutMethodOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/PutMethodInput";
export * from "../types/PutMethodOutput";
export * from "../types/PutMethodExceptionsUnion";

export class PutMethodCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutMethodInput,
      OutputTypesUnion,
      PutMethodOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = PutMethod;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutMethodInput,
    PutMethodOutput,
    Blob
  >();

  constructor(readonly input: PutMethodInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<PutMethodInput, PutMethodOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutMethodInput, PutMethodOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
