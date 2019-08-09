import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetGroupVersion } from "../model/GetGroupVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupVersionInput } from "../types/GetGroupVersionInput";
import { GetGroupVersionOutput } from "../types/GetGroupVersionOutput";
import { GreengrassResolvedConfiguration } from "../GreengrassConfiguration";
export * from "../types/GetGroupVersionInput";
export * from "../types/GetGroupVersionOutput";
export * from "../types/GetGroupVersionExceptionsUnion";

export class GetGroupVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupVersionInput,
      OutputTypesUnion,
      GetGroupVersionOutput,
      GreengrassResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetGroupVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupVersionInput,
    GetGroupVersionOutput,
    Uint8Array
  >();

  constructor(readonly input: GetGroupVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GreengrassResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGroupVersionInput, GetGroupVersionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGroupVersionInput, GetGroupVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
