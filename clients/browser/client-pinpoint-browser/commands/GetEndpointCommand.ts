import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEndpoint } from "../model/operations/GetEndpoint";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEndpointInput } from "../types/GetEndpointInput";
import { GetEndpointOutput } from "../types/GetEndpointOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetEndpointInput";
export * from "../types/GetEndpointOutput";
export * from "../types/GetEndpointExceptionsUnion";

export class GetEndpointCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEndpointInput,
      OutputTypesUnion,
      GetEndpointOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetEndpoint;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEndpointInput,
    GetEndpointOutput,
    Blob
  >();

  constructor(readonly input: GetEndpointInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetEndpointInput, GetEndpointOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEndpointInput, GetEndpointOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
