import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UndeploySystemInstance } from "../model/UndeploySystemInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UndeploySystemInstanceInput } from "../types/UndeploySystemInstanceInput";
import { UndeploySystemInstanceOutput } from "../types/UndeploySystemInstanceOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/UndeploySystemInstanceInput";
export * from "../types/UndeploySystemInstanceOutput";
export * from "../types/UndeploySystemInstanceExceptionsUnion";

export class UndeploySystemInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UndeploySystemInstanceInput,
      OutputTypesUnion,
      UndeploySystemInstanceOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UndeploySystemInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UndeploySystemInstanceInput,
    UndeploySystemInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: UndeploySystemInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UndeploySystemInstanceInput,
    UndeploySystemInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UndeploySystemInstanceInput, UndeploySystemInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
