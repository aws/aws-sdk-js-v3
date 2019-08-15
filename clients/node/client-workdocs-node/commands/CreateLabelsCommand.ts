import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateLabels } from "../model/operations/CreateLabels";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLabelsInput } from "../types/CreateLabelsInput";
import { CreateLabelsOutput } from "../types/CreateLabelsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/CreateLabelsInput";
export * from "../types/CreateLabelsOutput";
export * from "../types/CreateLabelsExceptionsUnion";

export class CreateLabelsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLabelsInput,
      OutputTypesUnion,
      CreateLabelsOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateLabels;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLabelsInput,
    CreateLabelsOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateLabelsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateLabelsInput, CreateLabelsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateLabelsInput, CreateLabelsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
