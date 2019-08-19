import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutMethodResponse } from "../model/operations/PutMethodResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutMethodResponseInput } from "../types/PutMethodResponseInput";
import { PutMethodResponseOutput } from "../types/PutMethodResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/PutMethodResponseInput";
export * from "../types/PutMethodResponseOutput";
export * from "../types/PutMethodResponseExceptionsUnion";

export class PutMethodResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutMethodResponseInput,
      OutputTypesUnion,
      PutMethodResponseOutput,
      APIGatewayResolvedConfiguration,
      Blob
    > {
  readonly model = PutMethodResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutMethodResponseInput,
    PutMethodResponseOutput,
    Blob
  >();

  constructor(readonly input: PutMethodResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<PutMethodResponseInput, PutMethodResponseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutMethodResponseInput, PutMethodResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
