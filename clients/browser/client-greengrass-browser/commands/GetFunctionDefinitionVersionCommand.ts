import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetFunctionDefinitionVersion } from "../model/operations/GetFunctionDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFunctionDefinitionVersionInput } from "../types/GetFunctionDefinitionVersionInput";
import { GetFunctionDefinitionVersionOutput } from "../types/GetFunctionDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetFunctionDefinitionVersionInput";
export * from "../types/GetFunctionDefinitionVersionOutput";
export * from "../types/GetFunctionDefinitionVersionExceptionsUnion";

export class GetFunctionDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFunctionDefinitionVersionInput,
      OutputTypesUnion,
      GetFunctionDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      Blob
    > {
  readonly model = GetFunctionDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFunctionDefinitionVersionInput,
    GetFunctionDefinitionVersionOutput,
    Blob
  >();

  constructor(readonly input: GetFunctionDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetFunctionDefinitionVersionInput,
    GetFunctionDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetFunctionDefinitionVersionInput,
        GetFunctionDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
