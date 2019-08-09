import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetSystemInstance } from "../model/GetSystemInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSystemInstanceInput } from "../types/GetSystemInstanceInput";
import { GetSystemInstanceOutput } from "../types/GetSystemInstanceOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/GetSystemInstanceInput";
export * from "../types/GetSystemInstanceOutput";
export * from "../types/GetSystemInstanceExceptionsUnion";

export class GetSystemInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSystemInstanceInput,
      OutputTypesUnion,
      GetSystemInstanceOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetSystemInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSystemInstanceInput,
    GetSystemInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetSystemInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSystemInstanceInput, GetSystemInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSystemInstanceInput, GetSystemInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
