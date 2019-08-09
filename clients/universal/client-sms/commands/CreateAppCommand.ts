import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateApp } from "../model/CreateApp";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAppInput } from "../types/CreateAppInput";
import { CreateAppOutput } from "../types/CreateAppOutput";
import { SMSResolvedConfiguration } from "../SMSConfiguration";
export * from "../types/CreateAppInput";
export * from "../types/CreateAppOutput";
export * from "../types/CreateAppExceptionsUnion";

export class CreateAppCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAppInput,
      OutputTypesUnion,
      CreateAppOutput,
      SMSResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateApp;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAppInput,
    CreateAppOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateAppInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: SMSResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateAppInput, CreateAppOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAppInput, CreateAppOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
