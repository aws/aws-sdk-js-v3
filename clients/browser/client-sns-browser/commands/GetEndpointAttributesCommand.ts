import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetEndpointAttributes } from "../model/GetEndpointAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEndpointAttributesInput } from "../types/GetEndpointAttributesInput";
import { GetEndpointAttributesOutput } from "../types/GetEndpointAttributesOutput";
import { SNSResolvedConfiguration } from "../SNSConfiguration";
export * from "../types/GetEndpointAttributesInput";
export * from "../types/GetEndpointAttributesOutput";
export * from "../types/GetEndpointAttributesExceptionsUnion";

export class GetEndpointAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEndpointAttributesInput,
      OutputTypesUnion,
      GetEndpointAttributesOutput,
      SNSResolvedConfiguration,
      Blob
    > {
  readonly model = GetEndpointAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEndpointAttributesInput,
    GetEndpointAttributesOutput,
    Blob
  >();

  constructor(readonly input: GetEndpointAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SNSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetEndpointAttributesInput,
    GetEndpointAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEndpointAttributesInput, GetEndpointAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
