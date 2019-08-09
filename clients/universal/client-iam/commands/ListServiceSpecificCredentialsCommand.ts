import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListServiceSpecificCredentials } from "../model/ListServiceSpecificCredentials";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListServiceSpecificCredentialsInput } from "../types/ListServiceSpecificCredentialsInput";
import { ListServiceSpecificCredentialsOutput } from "../types/ListServiceSpecificCredentialsOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListServiceSpecificCredentialsInput";
export * from "../types/ListServiceSpecificCredentialsOutput";
export * from "../types/ListServiceSpecificCredentialsExceptionsUnion";

export class ListServiceSpecificCredentialsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListServiceSpecificCredentialsInput,
      OutputTypesUnion,
      ListServiceSpecificCredentialsOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListServiceSpecificCredentials;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListServiceSpecificCredentialsInput,
    ListServiceSpecificCredentialsOutput,
    Uint8Array
  >();

  constructor(readonly input: ListServiceSpecificCredentialsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListServiceSpecificCredentialsInput,
    ListServiceSpecificCredentialsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListServiceSpecificCredentialsInput,
        ListServiceSpecificCredentialsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
