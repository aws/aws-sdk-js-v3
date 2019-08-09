import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateProtection } from "../model/CreateProtection";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProtectionInput } from "../types/CreateProtectionInput";
import { CreateProtectionOutput } from "../types/CreateProtectionOutput";
import { ShieldResolvedConfiguration } from "../ShieldConfiguration";
export * from "../types/CreateProtectionInput";
export * from "../types/CreateProtectionOutput";
export * from "../types/CreateProtectionExceptionsUnion";

export class CreateProtectionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateProtectionInput,
      OutputTypesUnion,
      CreateProtectionOutput,
      ShieldResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateProtection;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProtectionInput,
    CreateProtectionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateProtectionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ShieldResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateProtectionInput, CreateProtectionOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateProtectionInput, CreateProtectionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
