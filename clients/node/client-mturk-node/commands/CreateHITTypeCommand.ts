import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateHITType } from "../model/operations/CreateHITType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHITTypeInput } from "../types/CreateHITTypeInput";
import { CreateHITTypeOutput } from "../types/CreateHITTypeOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/CreateHITTypeInput";
export * from "../types/CreateHITTypeOutput";
export * from "../types/CreateHITTypeExceptionsUnion";

export class CreateHITTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHITTypeInput,
      OutputTypesUnion,
      CreateHITTypeOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateHITType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHITTypeInput,
    CreateHITTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateHITTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateHITTypeInput, CreateHITTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHITTypeInput, CreateHITTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
