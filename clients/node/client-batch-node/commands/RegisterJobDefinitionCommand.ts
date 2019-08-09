import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RegisterJobDefinition } from "../model/RegisterJobDefinition";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RegisterJobDefinitionInput } from "../types/RegisterJobDefinitionInput";
import { RegisterJobDefinitionOutput } from "../types/RegisterJobDefinitionOutput";
import { BatchResolvedConfiguration } from "../BatchConfiguration";
export * from "../types/RegisterJobDefinitionInput";
export * from "../types/RegisterJobDefinitionOutput";
export * from "../types/RegisterJobDefinitionExceptionsUnion";

export class RegisterJobDefinitionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RegisterJobDefinitionInput,
      OutputTypesUnion,
      RegisterJobDefinitionOutput,
      BatchResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RegisterJobDefinition;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RegisterJobDefinitionInput,
    RegisterJobDefinitionOutput,
    _stream.Readable
  >();

  constructor(readonly input: RegisterJobDefinitionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: BatchResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RegisterJobDefinitionInput,
    RegisterJobDefinitionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RegisterJobDefinitionInput, RegisterJobDefinitionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
