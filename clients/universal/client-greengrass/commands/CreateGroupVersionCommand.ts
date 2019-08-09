import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateGroupVersion } from "../model/CreateGroupVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateGroupVersionInput } from "../types/CreateGroupVersionInput";
import { CreateGroupVersionOutput } from "../types/CreateGroupVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/CreateGroupVersionInput";
export * from "../types/CreateGroupVersionOutput";
export * from "../types/CreateGroupVersionExceptionsUnion";

export class CreateGroupVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateGroupVersionInput,
      OutputTypesUnion,
      CreateGroupVersionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateGroupVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateGroupVersionInput,
    CreateGroupVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateGroupVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateGroupVersionInput,
    CreateGroupVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateGroupVersionInput, CreateGroupVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
