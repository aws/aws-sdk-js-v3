import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTriggers } from "../model/GetTriggers";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTriggersInput } from "../types/GetTriggersInput";
import { GetTriggersOutput } from "../types/GetTriggersOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetTriggersInput";
export * from "../types/GetTriggersOutput";
export * from "../types/GetTriggersExceptionsUnion";

export class GetTriggersCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTriggersInput,
      OutputTypesUnion,
      GetTriggersOutput,
      GlueResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTriggers;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTriggersInput,
    GetTriggersOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTriggersInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTriggersInput, GetTriggersOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTriggersInput, GetTriggersOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
