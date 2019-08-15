import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterJobDefinition } from "../model/operations/DeregisterJobDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterJobDefinitionInput } from "../types/DeregisterJobDefinitionInput";
import { DeregisterJobDefinitionOutput } from "../types/DeregisterJobDefinitionOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/DeregisterJobDefinitionInput";
export * from "../types/DeregisterJobDefinitionOutput";
export * from "../types/DeregisterJobDefinitionExceptionsUnion";

export class DeregisterJobDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterJobDefinitionInput,
      OutputTypesUnion,
      DeregisterJobDefinitionOutput,
      BatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterJobDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterJobDefinitionInput,
    DeregisterJobDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterJobDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterJobDefinitionInput,
    DeregisterJobDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterJobDefinitionInput, DeregisterJobDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
