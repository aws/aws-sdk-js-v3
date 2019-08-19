import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutGatewayResponse } from "../model/operations/PutGatewayResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutGatewayResponseInput } from "../types/PutGatewayResponseInput";
import { PutGatewayResponseOutput } from "../types/PutGatewayResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/PutGatewayResponseInput";
export * from "../types/PutGatewayResponseOutput";
export * from "../types/PutGatewayResponseExceptionsUnion";

export class PutGatewayResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutGatewayResponseInput,
      OutputTypesUnion,
      PutGatewayResponseOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutGatewayResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutGatewayResponseInput,
    PutGatewayResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutGatewayResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutGatewayResponseInput,
    PutGatewayResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutGatewayResponseInput, PutGatewayResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
