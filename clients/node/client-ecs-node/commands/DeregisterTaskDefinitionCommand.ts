import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeregisterTaskDefinition } from "../model/DeregisterTaskDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeregisterTaskDefinitionInput } from "../types/DeregisterTaskDefinitionInput";
import { DeregisterTaskDefinitionOutput } from "../types/DeregisterTaskDefinitionOutput";
import { ECSResolvedConfiguration } from "../ECSConfiguration";
export * from "../types/DeregisterTaskDefinitionInput";
export * from "../types/DeregisterTaskDefinitionOutput";
export * from "../types/DeregisterTaskDefinitionExceptionsUnion";

export class DeregisterTaskDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeregisterTaskDefinitionInput,
      OutputTypesUnion,
      DeregisterTaskDefinitionOutput,
      ECSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeregisterTaskDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeregisterTaskDefinitionInput,
    DeregisterTaskDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeregisterTaskDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeregisterTaskDefinitionInput,
    DeregisterTaskDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeregisterTaskDefinitionInput, DeregisterTaskDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
