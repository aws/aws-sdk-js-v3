import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartDBInstance } from "../model/operations/StartDBInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartDBInstanceInput } from "../types/StartDBInstanceInput";
import { StartDBInstanceOutput } from "../types/StartDBInstanceOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/StartDBInstanceInput";
export * from "../types/StartDBInstanceOutput";
export * from "../types/StartDBInstanceExceptionsUnion";

export class StartDBInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartDBInstanceInput,
      OutputTypesUnion,
      StartDBInstanceOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = StartDBInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartDBInstanceInput,
    StartDBInstanceOutput,
    Blob
  >();

  constructor(readonly input: StartDBInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<StartDBInstanceInput, StartDBInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartDBInstanceInput, StartDBInstanceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
