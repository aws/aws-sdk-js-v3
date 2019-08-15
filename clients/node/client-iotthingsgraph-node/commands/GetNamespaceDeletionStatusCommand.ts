import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetNamespaceDeletionStatus } from "../model/operations/GetNamespaceDeletionStatus";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetNamespaceDeletionStatusInput } from "../types/GetNamespaceDeletionStatusInput";
import { GetNamespaceDeletionStatusOutput } from "../types/GetNamespaceDeletionStatusOutput";
import { IoTThingsGraphResolvedConfiguration } from "../IoTThingsGraphConfiguration";
export * from "../types/GetNamespaceDeletionStatusInput";
export * from "../types/GetNamespaceDeletionStatusOutput";
export * from "../types/GetNamespaceDeletionStatusExceptionsUnion";

export class GetNamespaceDeletionStatusCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetNamespaceDeletionStatusInput,
      OutputTypesUnion,
      GetNamespaceDeletionStatusOutput,
      IoTThingsGraphResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetNamespaceDeletionStatus;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetNamespaceDeletionStatusInput,
    GetNamespaceDeletionStatusOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetNamespaceDeletionStatusInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTThingsGraphResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetNamespaceDeletionStatusInput,
    GetNamespaceDeletionStatusOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetNamespaceDeletionStatusInput,
        GetNamespaceDeletionStatusOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
