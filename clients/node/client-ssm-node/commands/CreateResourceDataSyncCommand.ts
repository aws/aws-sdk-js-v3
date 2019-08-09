import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateResourceDataSync } from "../model/CreateResourceDataSync";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResourceDataSyncInput } from "../types/CreateResourceDataSyncInput";
import { CreateResourceDataSyncOutput } from "../types/CreateResourceDataSyncOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/CreateResourceDataSyncInput";
export * from "../types/CreateResourceDataSyncOutput";
export * from "../types/CreateResourceDataSyncExceptionsUnion";

export class CreateResourceDataSyncCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResourceDataSyncInput,
      OutputTypesUnion,
      CreateResourceDataSyncOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateResourceDataSync;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResourceDataSyncInput,
    CreateResourceDataSyncOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateResourceDataSyncInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateResourceDataSyncInput,
    CreateResourceDataSyncOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResourceDataSyncInput, CreateResourceDataSyncOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
