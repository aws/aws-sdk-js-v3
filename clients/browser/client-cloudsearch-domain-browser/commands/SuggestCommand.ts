import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { Suggest } from "../model/Suggest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SuggestInput } from "../types/SuggestInput";
import { SuggestOutput } from "../types/SuggestOutput";
import { CloudSearchDomainResolvedConfiguration } from "../CloudSearchDomainConfiguration";
export * from "../types/SuggestInput";
export * from "../types/SuggestOutput";
export * from "../types/SuggestExceptionsUnion";

export class SuggestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SuggestInput,
      OutputTypesUnion,
      SuggestOutput,
      CloudSearchDomainResolvedConfiguration,
      Blob
    > {
  readonly model = Suggest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SuggestInput,
    SuggestOutput,
    Blob
  >();

  constructor(readonly input: SuggestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudSearchDomainResolvedConfiguration
  ): __aws_sdk_types.Handler<SuggestInput, SuggestOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SuggestInput, SuggestOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
