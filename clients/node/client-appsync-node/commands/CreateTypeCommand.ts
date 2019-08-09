import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateType } from "../model/CreateType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTypeInput } from "../types/CreateTypeInput";
import { CreateTypeOutput } from "../types/CreateTypeOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/CreateTypeInput";
export * from "../types/CreateTypeOutput";
export * from "../types/CreateTypeExceptionsUnion";

export class CreateTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTypeInput,
      OutputTypesUnion,
      CreateTypeOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTypeInput,
    CreateTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTypeInput, CreateTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTypeInput, CreateTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
