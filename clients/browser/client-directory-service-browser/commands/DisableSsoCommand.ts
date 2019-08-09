import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DisableSso } from "../model/DisableSso";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisableSsoInput } from "../types/DisableSsoInput";
import { DisableSsoOutput } from "../types/DisableSsoOutput";
import { DirectoryServiceResolvedConfiguration } from "../DirectoryServiceConfiguration";
export * from "../types/DisableSsoInput";
export * from "../types/DisableSsoOutput";
export * from "../types/DisableSsoExceptionsUnion";

export class DisableSsoCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisableSsoInput,
      OutputTypesUnion,
      DisableSsoOutput,
      DirectoryServiceResolvedConfiguration,
      Blob
    > {
  readonly model = DisableSso;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisableSsoInput,
    DisableSsoOutput,
    Blob
  >();

  constructor(readonly input: DisableSsoInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DirectoryServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<DisableSsoInput, DisableSsoOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisableSsoInput, DisableSsoOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
