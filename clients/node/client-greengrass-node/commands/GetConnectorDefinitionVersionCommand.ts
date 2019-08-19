import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetConnectorDefinitionVersion } from "../model/operations/GetConnectorDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetConnectorDefinitionVersionInput } from "../types/GetConnectorDefinitionVersionInput";
import { GetConnectorDefinitionVersionOutput } from "../types/GetConnectorDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetConnectorDefinitionVersionInput";
export * from "../types/GetConnectorDefinitionVersionOutput";
export * from "../types/GetConnectorDefinitionVersionExceptionsUnion";

export class GetConnectorDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetConnectorDefinitionVersionInput,
      OutputTypesUnion,
      GetConnectorDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetConnectorDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetConnectorDefinitionVersionInput,
    GetConnectorDefinitionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetConnectorDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetConnectorDefinitionVersionInput,
    GetConnectorDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetConnectorDefinitionVersionInput,
        GetConnectorDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
