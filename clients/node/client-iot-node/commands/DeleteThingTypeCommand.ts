import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteThingType } from "../model/operations/DeleteThingType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteThingTypeInput } from "../types/DeleteThingTypeInput";
import { DeleteThingTypeOutput } from "../types/DeleteThingTypeOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/DeleteThingTypeInput";
export * from "../types/DeleteThingTypeOutput";
export * from "../types/DeleteThingTypeExceptionsUnion";

export class DeleteThingTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteThingTypeInput,
      OutputTypesUnion,
      DeleteThingTypeOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteThingType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteThingTypeInput,
    DeleteThingTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteThingTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<DeleteThingTypeInput, DeleteThingTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteThingTypeInput, DeleteThingTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
