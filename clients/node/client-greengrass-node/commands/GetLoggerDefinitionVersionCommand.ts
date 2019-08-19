import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetLoggerDefinitionVersion } from "../model/operations/GetLoggerDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLoggerDefinitionVersionInput } from "../types/GetLoggerDefinitionVersionInput";
import { GetLoggerDefinitionVersionOutput } from "../types/GetLoggerDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetLoggerDefinitionVersionInput";
export * from "../types/GetLoggerDefinitionVersionOutput";
export * from "../types/GetLoggerDefinitionVersionExceptionsUnion";

export class GetLoggerDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLoggerDefinitionVersionInput,
      OutputTypesUnion,
      GetLoggerDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetLoggerDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLoggerDefinitionVersionInput,
    GetLoggerDefinitionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetLoggerDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetLoggerDefinitionVersionInput,
    GetLoggerDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetLoggerDefinitionVersionInput,
        GetLoggerDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
