import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateHIT } from "../model/operations/CreateHIT";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateHITInput } from "../types/CreateHITInput";
import { CreateHITOutput } from "../types/CreateHITOutput";
import { MTurkResolvedConfiguration } from "../MTurkConfiguration";
export * from "../types/CreateHITInput";
export * from "../types/CreateHITOutput";
export * from "../types/CreateHITExceptionsUnion";

export class CreateHITCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateHITInput,
      OutputTypesUnion,
      CreateHITOutput,
      MTurkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateHIT;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateHITInput,
    CreateHITOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateHITInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MTurkResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateHITInput, CreateHITOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateHITInput, CreateHITOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
