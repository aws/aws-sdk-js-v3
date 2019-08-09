import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RestoreDBInstanceToPointInTime } from "../model/RestoreDBInstanceToPointInTime";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RestoreDBInstanceToPointInTimeInput } from "../types/RestoreDBInstanceToPointInTimeInput";
import { RestoreDBInstanceToPointInTimeOutput } from "../types/RestoreDBInstanceToPointInTimeOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/RestoreDBInstanceToPointInTimeInput";
export * from "../types/RestoreDBInstanceToPointInTimeOutput";
export * from "../types/RestoreDBInstanceToPointInTimeExceptionsUnion";

export class RestoreDBInstanceToPointInTimeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RestoreDBInstanceToPointInTimeInput,
      OutputTypesUnion,
      RestoreDBInstanceToPointInTimeOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = RestoreDBInstanceToPointInTime;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RestoreDBInstanceToPointInTimeInput,
    RestoreDBInstanceToPointInTimeOutput,
    Blob
  >();

  constructor(readonly input: RestoreDBInstanceToPointInTimeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RestoreDBInstanceToPointInTimeInput,
    RestoreDBInstanceToPointInTimeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RestoreDBInstanceToPointInTimeInput,
        RestoreDBInstanceToPointInTimeOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
