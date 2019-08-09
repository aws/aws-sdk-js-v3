import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeploySystemInstance } from "../model/DeploySystemInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeploySystemInstanceInput } from "../types/DeploySystemInstanceInput";
import { DeploySystemInstanceOutput } from "../types/DeploySystemInstanceOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/DeploySystemInstanceInput";
export * from "../types/DeploySystemInstanceOutput";
export * from "../types/DeploySystemInstanceExceptionsUnion";

export class DeploySystemInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeploySystemInstanceInput,
      OutputTypesUnion,
      DeploySystemInstanceOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeploySystemInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeploySystemInstanceInput,
    DeploySystemInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeploySystemInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeploySystemInstanceInput,
    DeploySystemInstanceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeploySystemInstanceInput, DeploySystemInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
