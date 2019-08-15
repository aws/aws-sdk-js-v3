import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyCurrentDBClusterCapacity } from "../model/operations/ModifyCurrentDBClusterCapacity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyCurrentDBClusterCapacityInput } from "../types/ModifyCurrentDBClusterCapacityInput";
import { ModifyCurrentDBClusterCapacityOutput } from "../types/ModifyCurrentDBClusterCapacityOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyCurrentDBClusterCapacityInput";
export * from "../types/ModifyCurrentDBClusterCapacityOutput";
export * from "../types/ModifyCurrentDBClusterCapacityExceptionsUnion";

export class ModifyCurrentDBClusterCapacityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyCurrentDBClusterCapacityInput,
      OutputTypesUnion,
      ModifyCurrentDBClusterCapacityOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyCurrentDBClusterCapacity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyCurrentDBClusterCapacityInput,
    ModifyCurrentDBClusterCapacityOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyCurrentDBClusterCapacityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyCurrentDBClusterCapacityInput,
    ModifyCurrentDBClusterCapacityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyCurrentDBClusterCapacityInput,
        ModifyCurrentDBClusterCapacityOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
