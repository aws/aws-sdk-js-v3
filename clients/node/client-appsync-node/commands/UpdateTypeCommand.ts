import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateType } from "../model/operations/UpdateType";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTypeInput } from "../types/UpdateTypeInput";
import { UpdateTypeOutput } from "../types/UpdateTypeOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/UpdateTypeInput";
export * from "../types/UpdateTypeOutput";
export * from "../types/UpdateTypeExceptionsUnion";

export class UpdateTypeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTypeInput,
      OutputTypesUnion,
      UpdateTypeOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateType;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTypeInput,
    UpdateTypeOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateTypeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTypeInput, UpdateTypeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTypeInput, UpdateTypeOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
