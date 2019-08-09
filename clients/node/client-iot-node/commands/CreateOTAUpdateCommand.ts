import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateOTAUpdate } from "../model/CreateOTAUpdate";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOTAUpdateInput } from "../types/CreateOTAUpdateInput";
import { CreateOTAUpdateOutput } from "../types/CreateOTAUpdateOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/CreateOTAUpdateInput";
export * from "../types/CreateOTAUpdateOutput";
export * from "../types/CreateOTAUpdateExceptionsUnion";

export class CreateOTAUpdateCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOTAUpdateInput,
      OutputTypesUnion,
      CreateOTAUpdateOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateOTAUpdate;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOTAUpdateInput,
    CreateOTAUpdateOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateOTAUpdateInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateOTAUpdateInput, CreateOTAUpdateOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateOTAUpdateInput, CreateOTAUpdateOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
