import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDataEndpoint } from "../model/GetDataEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDataEndpointInput } from "../types/GetDataEndpointInput";
import { GetDataEndpointOutput } from "../types/GetDataEndpointOutput";
import { KinesisVideoResolvedConfiguration } from "../KinesisVideoConfiguration";
export * from "../types/GetDataEndpointInput";
export * from "../types/GetDataEndpointOutput";
export * from "../types/GetDataEndpointExceptionsUnion";

export class GetDataEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDataEndpointInput,
      OutputTypesUnion,
      GetDataEndpointOutput,
      KinesisVideoResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDataEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDataEndpointInput,
    GetDataEndpointOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDataEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: KinesisVideoResolvedConfiguration
  ): __aws_sdk_types.Handler<GetDataEndpointInput, GetDataEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDataEndpointInput, GetDataEndpointOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
