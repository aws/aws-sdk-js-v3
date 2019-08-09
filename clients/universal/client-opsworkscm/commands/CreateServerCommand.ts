import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateServer } from "../model/CreateServer";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateServerInput } from "../types/CreateServerInput";
import { CreateServerOutput } from "../types/CreateServerOutput";
import { OpsWorksCMResolvedConfiguration } from "../OpsWorksCMConfiguration";
export * from "../types/CreateServerInput";
export * from "../types/CreateServerOutput";
export * from "../types/CreateServerExceptionsUnion";

export class CreateServerCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateServerInput,
      OutputTypesUnion,
      CreateServerOutput,
      OpsWorksCMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = CreateServer;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateServerInput,
    CreateServerOutput,
    Uint8Array
  >();

  constructor(readonly input: CreateServerInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: OpsWorksCMResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateServerInput, CreateServerOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateServerInput, CreateServerOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
