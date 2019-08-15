import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateMethodResponse } from "../model/operations/UpdateMethodResponse";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateMethodResponseInput } from "../types/UpdateMethodResponseInput";
import { UpdateMethodResponseOutput } from "../types/UpdateMethodResponseOutput";
import { APIGatewayResolvedConfiguration } from "../APIGatewayConfiguration";
export * from "../types/UpdateMethodResponseInput";
export * from "../types/UpdateMethodResponseOutput";
export * from "../types/UpdateMethodResponseExceptionsUnion";

export class UpdateMethodResponseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateMethodResponseInput,
      OutputTypesUnion,
      UpdateMethodResponseOutput,
      APIGatewayResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateMethodResponse;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateMethodResponseInput,
    UpdateMethodResponseOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateMethodResponseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: APIGatewayResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateMethodResponseInput,
    UpdateMethodResponseOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateMethodResponseInput, UpdateMethodResponseOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
