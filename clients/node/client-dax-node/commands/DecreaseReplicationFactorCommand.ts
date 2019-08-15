import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DecreaseReplicationFactor } from "../model/operations/DecreaseReplicationFactor";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DecreaseReplicationFactorInput } from "../types/DecreaseReplicationFactorInput";
import { DecreaseReplicationFactorOutput } from "../types/DecreaseReplicationFactorOutput";
import { DAXResolvedConfiguration } from "../DAXConfiguration";
export * from "../types/DecreaseReplicationFactorInput";
export * from "../types/DecreaseReplicationFactorOutput";
export * from "../types/DecreaseReplicationFactorExceptionsUnion";

export class DecreaseReplicationFactorCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DecreaseReplicationFactorInput,
      OutputTypesUnion,
      DecreaseReplicationFactorOutput,
      DAXResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DecreaseReplicationFactor;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DecreaseReplicationFactorInput,
    DecreaseReplicationFactorOutput,
    _stream.Readable
  >();

  constructor(readonly input: DecreaseReplicationFactorInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DAXResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DecreaseReplicationFactorInput,
    DecreaseReplicationFactorOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DecreaseReplicationFactorInput, DecreaseReplicationFactorOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
