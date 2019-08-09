import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetResourceDefinitionVersion } from "../model/GetResourceDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResourceDefinitionVersionInput } from "../types/GetResourceDefinitionVersionInput";
import { GetResourceDefinitionVersionOutput } from "../types/GetResourceDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetResourceDefinitionVersionInput";
export * from "../types/GetResourceDefinitionVersionOutput";
export * from "../types/GetResourceDefinitionVersionExceptionsUnion";

export class GetResourceDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResourceDefinitionVersionInput,
      OutputTypesUnion,
      GetResourceDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetResourceDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResourceDefinitionVersionInput,
    GetResourceDefinitionVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: GetResourceDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetResourceDefinitionVersionInput,
    GetResourceDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetResourceDefinitionVersionInput,
        GetResourceDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
