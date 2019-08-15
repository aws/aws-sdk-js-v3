import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetContactAttributes } from "../model/operations/GetContactAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetContactAttributesInput } from "../types/GetContactAttributesInput";
import { GetContactAttributesOutput } from "../types/GetContactAttributesOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/GetContactAttributesInput";
export * from "../types/GetContactAttributesOutput";
export * from "../types/GetContactAttributesExceptionsUnion";

export class GetContactAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetContactAttributesInput,
      OutputTypesUnion,
      GetContactAttributesOutput,
      ConnectResolvedConfiguration,
      Blob
    > {
  readonly model = GetContactAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetContactAttributesInput,
    GetContactAttributesOutput,
    Blob
  >();

  constructor(readonly input: GetContactAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetContactAttributesInput,
    GetContactAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetContactAttributesInput, GetContactAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
