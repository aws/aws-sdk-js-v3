import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResolveCase } from "../model/operations/ResolveCase";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResolveCaseInput } from "../types/ResolveCaseInput";
import { ResolveCaseOutput } from "../types/ResolveCaseOutput";
import { SupportResolvedConfiguration } from "../SupportConfiguration";
export * from "../types/ResolveCaseInput";
export * from "../types/ResolveCaseOutput";
export * from "../types/ResolveCaseExceptionsUnion";

export class ResolveCaseCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResolveCaseInput,
      OutputTypesUnion,
      ResolveCaseOutput,
      SupportResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResolveCase;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResolveCaseInput,
    ResolveCaseOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResolveCaseInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SupportResolvedConfiguration
  ): __aws_sdk_types.Handler<ResolveCaseInput, ResolveCaseOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResolveCaseInput, ResolveCaseOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
