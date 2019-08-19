import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateFunction } from "../model/operations/CreateFunction";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFunctionInput } from "../types/CreateFunctionInput";
import { CreateFunctionOutput } from "../types/CreateFunctionOutput";
import { AppSyncResolvedConfiguration } from "../AppSyncConfiguration";
export * from "../types/CreateFunctionInput";
export * from "../types/CreateFunctionOutput";
export * from "../types/CreateFunctionExceptionsUnion";

export class CreateFunctionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFunctionInput,
      OutputTypesUnion,
      CreateFunctionOutput,
      AppSyncResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateFunction;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFunctionInput,
    CreateFunctionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateFunctionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppSyncResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFunctionInput, CreateFunctionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFunctionInput, CreateFunctionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
