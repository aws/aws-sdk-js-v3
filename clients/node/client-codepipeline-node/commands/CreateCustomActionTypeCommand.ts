import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateCustomActionType } from "../model/operations/CreateCustomActionType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateCustomActionTypeInput } from "../types/CreateCustomActionTypeInput";
import { CreateCustomActionTypeOutput } from "../types/CreateCustomActionTypeOutput";
import { CodePipelineResolvedConfiguration } from "../CodePipelineConfiguration";
export * from "../types/CreateCustomActionTypeInput";
export * from "../types/CreateCustomActionTypeOutput";
export * from "../types/CreateCustomActionTypeExceptionsUnion";

export class CreateCustomActionTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateCustomActionTypeInput,
      OutputTypesUnion,
      CreateCustomActionTypeOutput,
      CodePipelineResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateCustomActionType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateCustomActionTypeInput,
    CreateCustomActionTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateCustomActionTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodePipelineResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateCustomActionTypeInput,
    CreateCustomActionTypeOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateCustomActionTypeInput, CreateCustomActionTypeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
