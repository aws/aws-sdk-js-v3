import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopDBInstance } from "../model/StopDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopDBInstanceInput } from "../types/StopDBInstanceInput";
import { StopDBInstanceOutput } from "../types/StopDBInstanceOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/StopDBInstanceInput";
export * from "../types/StopDBInstanceOutput";
export * from "../types/StopDBInstanceExceptionsUnion";

export class StopDBInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopDBInstanceInput,
      OutputTypesUnion,
      StopDBInstanceOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopDBInstanceInput,
    StopDBInstanceOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<StopDBInstanceInput, StopDBInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopDBInstanceInput, StopDBInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
