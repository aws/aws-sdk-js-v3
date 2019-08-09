import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetCoreDefinitionVersion } from "../model/GetCoreDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCoreDefinitionVersionInput } from "../types/GetCoreDefinitionVersionInput";
import { GetCoreDefinitionVersionOutput } from "../types/GetCoreDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetCoreDefinitionVersionInput";
export * from "../types/GetCoreDefinitionVersionOutput";
export * from "../types/GetCoreDefinitionVersionExceptionsUnion";

export class GetCoreDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCoreDefinitionVersionInput,
      OutputTypesUnion,
      GetCoreDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetCoreDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCoreDefinitionVersionInput,
    GetCoreDefinitionVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetCoreDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetCoreDefinitionVersionInput,
    GetCoreDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCoreDefinitionVersionInput, GetCoreDefinitionVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
