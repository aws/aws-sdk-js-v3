import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeactivateUser } from "../model/DeactivateUser";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeactivateUserInput } from "../types/DeactivateUserInput";
import { DeactivateUserOutput } from "../types/DeactivateUserOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/DeactivateUserInput";
export * from "../types/DeactivateUserOutput";
export * from "../types/DeactivateUserExceptionsUnion";

export class DeactivateUserCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeactivateUserInput,
      OutputTypesUnion,
      DeactivateUserOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeactivateUser;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeactivateUserInput,
    DeactivateUserOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeactivateUserInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<DeactivateUserInput, DeactivateUserOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeactivateUserInput, DeactivateUserOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
