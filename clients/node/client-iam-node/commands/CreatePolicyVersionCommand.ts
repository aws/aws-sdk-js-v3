import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreatePolicyVersion } from "../model/operations/CreatePolicyVersion";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreatePolicyVersionInput } from "../types/CreatePolicyVersionInput";
import { CreatePolicyVersionOutput } from "../types/CreatePolicyVersionOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/CreatePolicyVersionInput";
export * from "../types/CreatePolicyVersionOutput";
export * from "../types/CreatePolicyVersionExceptionsUnion";

export class CreatePolicyVersionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreatePolicyVersionInput,
      OutputTypesUnion,
      CreatePolicyVersionOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreatePolicyVersion;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreatePolicyVersionInput,
    CreatePolicyVersionOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreatePolicyVersionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreatePolicyVersionInput,
    CreatePolicyVersionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreatePolicyVersionInput, CreatePolicyVersionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
