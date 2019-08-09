import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { IncreaseReplicationFactor } from "../model/IncreaseReplicationFactor";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { IncreaseReplicationFactorInput } from "../types/IncreaseReplicationFactorInput";
import { IncreaseReplicationFactorOutput } from "../types/IncreaseReplicationFactorOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/IncreaseReplicationFactorInput";
export * from "../types/IncreaseReplicationFactorOutput";
export * from "../types/IncreaseReplicationFactorExceptionsUnion";

export class IncreaseReplicationFactorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      IncreaseReplicationFactorInput,
      OutputTypesUnion,
      IncreaseReplicationFactorOutput,
      DAXResolvedConfiguration,
      Blob
    > {
  readonly model = IncreaseReplicationFactor;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    IncreaseReplicationFactorInput,
    IncreaseReplicationFactorOutput,
    Blob
  >();

  constructor(readonly input: IncreaseReplicationFactorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    IncreaseReplicationFactorInput,
    IncreaseReplicationFactorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<IncreaseReplicationFactorInput, IncreaseReplicationFactorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
