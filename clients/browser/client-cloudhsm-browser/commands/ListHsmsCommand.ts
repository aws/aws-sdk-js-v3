import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListHsms } from "../model/ListHsms";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListHsmsInput } from "../types/ListHsmsInput";
import { ListHsmsOutput } from "../types/ListHsmsOutput";
import { CloudHSMResolvedConfiguration } from "../CloudHSMConfiguration";
export * from "../types/ListHsmsInput";
export * from "../types/ListHsmsOutput";
export * from "../types/ListHsmsExceptionsUnion";

export class ListHsmsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListHsmsInput,
      OutputTypesUnion,
      ListHsmsOutput,
      CloudHSMResolvedConfiguration,
      Blob
    > {
  readonly model = ListHsms;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListHsmsInput,
    ListHsmsOutput,
    Blob
  >();

  constructor(readonly input: ListHsmsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudHSMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListHsmsInput, ListHsmsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListHsmsInput, ListHsmsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
