import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetMailboxDetails } from "../model/GetMailboxDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetMailboxDetailsInput } from "../types/GetMailboxDetailsInput";
import { GetMailboxDetailsOutput } from "../types/GetMailboxDetailsOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/GetMailboxDetailsInput";
export * from "../types/GetMailboxDetailsOutput";
export * from "../types/GetMailboxDetailsExceptionsUnion";

export class GetMailboxDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetMailboxDetailsInput,
      OutputTypesUnion,
      GetMailboxDetailsOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = GetMailboxDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetMailboxDetailsInput,
    GetMailboxDetailsOutput,
    Blob
  >();

  constructor(readonly input: GetMailboxDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetMailboxDetailsInput, GetMailboxDetailsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetMailboxDetailsInput, GetMailboxDetailsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
