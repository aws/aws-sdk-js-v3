import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateSystemInstance } from "../model/operations/CreateSystemInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateSystemInstanceInput } from "../types/CreateSystemInstanceInput";
import { CreateSystemInstanceOutput } from "../types/CreateSystemInstanceOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/CreateSystemInstanceInput";
export * from "../types/CreateSystemInstanceOutput";
export * from "../types/CreateSystemInstanceExceptionsUnion";

export class CreateSystemInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateSystemInstanceInput,
      OutputTypesUnion,
      CreateSystemInstanceOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateSystemInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateSystemInstanceInput,
    CreateSystemInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateSystemInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateSystemInstanceInput,
    CreateSystemInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateSystemInstanceInput, CreateSystemInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
