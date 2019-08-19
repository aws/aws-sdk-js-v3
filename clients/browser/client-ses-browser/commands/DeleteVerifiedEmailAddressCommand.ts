import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteVerifiedEmailAddress } from "../model/operations/DeleteVerifiedEmailAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteVerifiedEmailAddressInput } from "../types/DeleteVerifiedEmailAddressInput";
import { DeleteVerifiedEmailAddressOutput } from "../types/DeleteVerifiedEmailAddressOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/DeleteVerifiedEmailAddressInput";
export * from "../types/DeleteVerifiedEmailAddressOutput";
export * from "../types/DeleteVerifiedEmailAddressExceptionsUnion";

export class DeleteVerifiedEmailAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteVerifiedEmailAddressInput,
      OutputTypesUnion,
      DeleteVerifiedEmailAddressOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteVerifiedEmailAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteVerifiedEmailAddressInput,
    DeleteVerifiedEmailAddressOutput,
    Blob
  >();

  constructor(readonly input: DeleteVerifiedEmailAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteVerifiedEmailAddressInput,
    DeleteVerifiedEmailAddressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteVerifiedEmailAddressInput,
        DeleteVerifiedEmailAddressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
