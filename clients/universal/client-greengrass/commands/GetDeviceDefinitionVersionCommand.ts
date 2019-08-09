import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDeviceDefinitionVersion } from "../model/GetDeviceDefinitionVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDeviceDefinitionVersionInput } from "../types/GetDeviceDefinitionVersionInput";
import { GetDeviceDefinitionVersionOutput } from "../types/GetDeviceDefinitionVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetDeviceDefinitionVersionInput";
export * from "../types/GetDeviceDefinitionVersionOutput";
export * from "../types/GetDeviceDefinitionVersionExceptionsUnion";

export class GetDeviceDefinitionVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDeviceDefinitionVersionInput,
      OutputTypesUnion,
      GetDeviceDefinitionVersionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDeviceDefinitionVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDeviceDefinitionVersionInput,
    GetDeviceDefinitionVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDeviceDefinitionVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDeviceDefinitionVersionInput,
    GetDeviceDefinitionVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetDeviceDefinitionVersionInput,
        GetDeviceDefinitionVersionOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
