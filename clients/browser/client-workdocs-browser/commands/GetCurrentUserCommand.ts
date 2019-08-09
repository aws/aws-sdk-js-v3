import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCurrentUser } from "../model/GetCurrentUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCurrentUserInput } from "../types/GetCurrentUserInput";
import { GetCurrentUserOutput } from "../types/GetCurrentUserOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/GetCurrentUserInput";
export * from "../types/GetCurrentUserOutput";
export * from "../types/GetCurrentUserExceptionsUnion";

export class GetCurrentUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCurrentUserInput,
      OutputTypesUnion,
      GetCurrentUserOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = GetCurrentUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCurrentUserInput,
    GetCurrentUserOutput,
    Blob
  >();

  constructor(readonly input: GetCurrentUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCurrentUserInput, GetCurrentUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCurrentUserInput, GetCurrentUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
