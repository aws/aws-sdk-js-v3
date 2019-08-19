import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCase } from "../model/operations/CreateCase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCaseInput } from "../types/CreateCaseInput";
import { CreateCaseOutput } from "../types/CreateCaseOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/CreateCaseInput";
export * from "../types/CreateCaseOutput";
export * from "../types/CreateCaseExceptionsUnion";

export class CreateCaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCaseInput,
      OutputTypesUnion,
      CreateCaseOutput,
      SupportResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCaseInput,
    CreateCaseOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateCaseInput, CreateCaseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCaseInput, CreateCaseOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
