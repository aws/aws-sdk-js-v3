import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListVerifiedEmailAddresses } from "../model/operations/ListVerifiedEmailAddresses";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListVerifiedEmailAddressesInput } from "../types/ListVerifiedEmailAddressesInput";
import { ListVerifiedEmailAddressesOutput } from "../types/ListVerifiedEmailAddressesOutput";
import { SESResolvedConfiguration } from "../SESConfiguration";
export * from "../types/ListVerifiedEmailAddressesInput";
export * from "../types/ListVerifiedEmailAddressesOutput";
export * from "../types/ListVerifiedEmailAddressesExceptionsUnion";

export class ListVerifiedEmailAddressesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListVerifiedEmailAddressesInput,
      OutputTypesUnion,
      ListVerifiedEmailAddressesOutput,
      SESResolvedConfiguration,
      Blob
    > {
  readonly model = ListVerifiedEmailAddresses;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListVerifiedEmailAddressesInput,
    ListVerifiedEmailAddressesOutput,
    Blob
  >();

  constructor(readonly input: ListVerifiedEmailAddressesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SESResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListVerifiedEmailAddressesInput,
    ListVerifiedEmailAddressesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListVerifiedEmailAddressesInput,
        ListVerifiedEmailAddressesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
