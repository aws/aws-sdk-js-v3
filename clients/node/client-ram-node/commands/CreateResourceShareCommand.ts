import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateResourceShare } from "../model/operations/CreateResourceShare";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResourceShareInput } from "../types/CreateResourceShareInput";
import { CreateResourceShareOutput } from "../types/CreateResourceShareOutput";
import { RAMResolvedConfiguration } from "../RAMConfiguration";
export * from "../types/CreateResourceShareInput";
export * from "../types/CreateResourceShareOutput";
export * from "../types/CreateResourceShareExceptionsUnion";

export class CreateResourceShareCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResourceShareInput,
      OutputTypesUnion,
      CreateResourceShareOutput,
      RAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateResourceShare;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResourceShareInput,
    CreateResourceShareOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateResourceShareInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateResourceShareInput,
    CreateResourceShareOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResourceShareInput, CreateResourceShareOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
