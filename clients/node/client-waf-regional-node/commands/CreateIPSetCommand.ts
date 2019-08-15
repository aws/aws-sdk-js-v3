import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateIPSet } from "../model/operations/CreateIPSet";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateIPSetInput } from "../types/CreateIPSetInput";
import { CreateIPSetOutput } from "../types/CreateIPSetOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/CreateIPSetInput";
export * from "../types/CreateIPSetOutput";
export * from "../types/CreateIPSetExceptionsUnion";

export class CreateIPSetCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateIPSetInput,
      OutputTypesUnion,
      CreateIPSetOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateIPSet;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateIPSetInput,
    CreateIPSetOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateIPSetInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateIPSetInput, CreateIPSetOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateIPSetInput, CreateIPSetOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
