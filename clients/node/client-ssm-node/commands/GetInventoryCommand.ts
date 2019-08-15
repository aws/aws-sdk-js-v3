import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetInventory } from "../model/operations/GetInventory";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetInventoryInput } from "../types/GetInventoryInput";
import { GetInventoryOutput } from "../types/GetInventoryOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/GetInventoryInput";
export * from "../types/GetInventoryOutput";
export * from "../types/GetInventoryExceptionsUnion";

export class GetInventoryCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetInventoryInput,
      OutputTypesUnion,
      GetInventoryOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetInventory;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetInventoryInput,
    GetInventoryOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetInventoryInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetInventoryInput, GetInventoryOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetInventoryInput, GetInventoryOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
