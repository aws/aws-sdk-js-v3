import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateDirectoryConfig } from "../model/operations/UpdateDirectoryConfig";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDirectoryConfigInput } from "../types/UpdateDirectoryConfigInput";
import { UpdateDirectoryConfigOutput } from "../types/UpdateDirectoryConfigOutput";
import { AppStreamResolvedConfiguration } from "../AppStreamConfiguration";
export * from "../types/UpdateDirectoryConfigInput";
export * from "../types/UpdateDirectoryConfigOutput";
export * from "../types/UpdateDirectoryConfigExceptionsUnion";

export class UpdateDirectoryConfigCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDirectoryConfigInput,
      OutputTypesUnion,
      UpdateDirectoryConfigOutput,
      AppStreamResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateDirectoryConfig;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDirectoryConfigInput,
    UpdateDirectoryConfigOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateDirectoryConfigInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AppStreamResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDirectoryConfigInput,
    UpdateDirectoryConfigOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDirectoryConfigInput, UpdateDirectoryConfigOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
