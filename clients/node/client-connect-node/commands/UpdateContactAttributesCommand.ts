import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateContactAttributes } from "../model/operations/UpdateContactAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateContactAttributesInput } from "../types/UpdateContactAttributesInput";
import { UpdateContactAttributesOutput } from "../types/UpdateContactAttributesOutput";
import { ConnectResolvedConfiguration } from "../ConnectConfiguration";
export * from "../types/UpdateContactAttributesInput";
export * from "../types/UpdateContactAttributesOutput";
export * from "../types/UpdateContactAttributesExceptionsUnion";

export class UpdateContactAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateContactAttributesInput,
      OutputTypesUnion,
      UpdateContactAttributesOutput,
      ConnectResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateContactAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateContactAttributesInput,
    UpdateContactAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateContactAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConnectResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateContactAttributesInput,
    UpdateContactAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateContactAttributesInput, UpdateContactAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
