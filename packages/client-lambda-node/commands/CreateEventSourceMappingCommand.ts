import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateEventSourceMapping } from "../model/CreateEventSourceMapping";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEventSourceMappingInput } from "../types/CreateEventSourceMappingInput";
import { CreateEventSourceMappingOutput } from "../types/CreateEventSourceMappingOutput";
import { LambdaResolvedConfiguration } from "../LambdaConfiguration";
export * from "../types/CreateEventSourceMappingInput";
export * from "../types/CreateEventSourceMappingOutput";
export * from "../types/CreateEventSourceMappingExceptionsUnion";

export class CreateEventSourceMappingCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEventSourceMappingInput,
      OutputTypesUnion,
      CreateEventSourceMappingOutput,
      LambdaResolvedConfiguration,
      _stream.Readable
    > {
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEventSourceMappingInput,
    CreateEventSourceMappingOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateEventSourceMappingInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LambdaResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEventSourceMappingInput,
    CreateEventSourceMappingOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: CreateEventSourceMapping
    };

    return stack.resolve(
      handler<CreateEventSourceMappingInput, CreateEventSourceMappingOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
