import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListProvisionedCapacity } from "../model/ListProvisionedCapacity";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProvisionedCapacityInput } from "../types/ListProvisionedCapacityInput";
import { ListProvisionedCapacityOutput } from "../types/ListProvisionedCapacityOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/ListProvisionedCapacityInput";
export * from "../types/ListProvisionedCapacityOutput";
export * from "../types/ListProvisionedCapacityExceptionsUnion";

export class ListProvisionedCapacityCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProvisionedCapacityInput,
      OutputTypesUnion,
      ListProvisionedCapacityOutput,
      GlacierResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListProvisionedCapacity;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProvisionedCapacityInput,
    ListProvisionedCapacityOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListProvisionedCapacityInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListProvisionedCapacityInput,
    ListProvisionedCapacityOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProvisionedCapacityInput, ListProvisionedCapacityOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
