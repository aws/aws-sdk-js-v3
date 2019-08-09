import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDevEndpoint } from "../model/GetDevEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDevEndpointInput } from "../types/GetDevEndpointInput";
import { GetDevEndpointOutput } from "../types/GetDevEndpointOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetDevEndpointInput";
export * from "../types/GetDevEndpointOutput";
export * from "../types/GetDevEndpointExceptionsUnion";

export class GetDevEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDevEndpointInput,
      OutputTypesUnion,
      GetDevEndpointOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetDevEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDevEndpointInput,
    GetDevEndpointOutput,
    Blob
  >();

  constructor(readonly input: GetDevEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDevEndpointInput, GetDevEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDevEndpointInput, GetDevEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
