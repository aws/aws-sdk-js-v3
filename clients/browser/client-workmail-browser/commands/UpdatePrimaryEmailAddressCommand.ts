import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdatePrimaryEmailAddress } from "../model/UpdatePrimaryEmailAddress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdatePrimaryEmailAddressInput } from "../types/UpdatePrimaryEmailAddressInput";
import { UpdatePrimaryEmailAddressOutput } from "../types/UpdatePrimaryEmailAddressOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/UpdatePrimaryEmailAddressInput";
export * from "../types/UpdatePrimaryEmailAddressOutput";
export * from "../types/UpdatePrimaryEmailAddressExceptionsUnion";

export class UpdatePrimaryEmailAddressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdatePrimaryEmailAddressInput,
      OutputTypesUnion,
      UpdatePrimaryEmailAddressOutput,
      WorkMailResolvedConfiguration,
      Blob
    > {
  readonly model = UpdatePrimaryEmailAddress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdatePrimaryEmailAddressInput,
    UpdatePrimaryEmailAddressOutput,
    Blob
  >();

  constructor(readonly input: UpdatePrimaryEmailAddressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdatePrimaryEmailAddressInput,
    UpdatePrimaryEmailAddressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdatePrimaryEmailAddressInput, UpdatePrimaryEmailAddressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
