import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateFilter } from "../model/CreateFilter";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateFilterInput } from "../types/CreateFilterInput";
import { CreateFilterOutput } from "../types/CreateFilterOutput";
import { GuardDutyResolvedConfiguration } from "../GuardDutyConfiguration";
export * from "../types/CreateFilterInput";
export * from "../types/CreateFilterOutput";
export * from "../types/CreateFilterExceptionsUnion";

export class CreateFilterCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateFilterInput,
      OutputTypesUnion,
      CreateFilterOutput,
      GuardDutyResolvedConfiguration,
      Blob
    > {
  readonly model = CreateFilter;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateFilterInput,
    CreateFilterOutput,
    Blob
  >();

  constructor(readonly input: CreateFilterInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GuardDutyResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateFilterInput, CreateFilterOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateFilterInput, CreateFilterOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
