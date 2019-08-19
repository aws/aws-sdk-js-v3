import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetMethodResponse } from "../model/operations/GetMethodResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMethodResponseInput } from "../types/GetMethodResponseInput";
import { GetMethodResponseOutput } from "../types/GetMethodResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/GetMethodResponseInput";
export * from "../types/GetMethodResponseOutput";
export * from "../types/GetMethodResponseExceptionsUnion";

export class GetMethodResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMethodResponseInput,
      OutputTypesUnion,
      GetMethodResponseOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetMethodResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMethodResponseInput,
    GetMethodResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetMethodResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMethodResponseInput, GetMethodResponseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMethodResponseInput, GetMethodResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
