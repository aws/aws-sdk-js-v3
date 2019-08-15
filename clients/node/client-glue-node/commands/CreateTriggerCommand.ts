import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTrigger } from "../model/operations/CreateTrigger";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTriggerInput } from "../types/CreateTriggerInput";
import { CreateTriggerOutput } from "../types/CreateTriggerOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/CreateTriggerInput";
export * from "../types/CreateTriggerOutput";
export * from "../types/CreateTriggerExceptionsUnion";

export class CreateTriggerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTriggerInput,
      OutputTypesUnion,
      CreateTriggerOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTrigger;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTriggerInput,
    CreateTriggerOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTriggerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateTriggerInput, CreateTriggerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateTriggerInput, CreateTriggerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
