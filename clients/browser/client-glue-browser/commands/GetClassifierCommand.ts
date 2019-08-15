import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetClassifier } from "../model/operations/GetClassifier";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetClassifierInput } from "../types/GetClassifierInput";
import { GetClassifierOutput } from "../types/GetClassifierOutput";
import { GlueResolvedConfiguration } from "../GlueConfiguration";
export * from "../types/GetClassifierInput";
export * from "../types/GetClassifierOutput";
export * from "../types/GetClassifierExceptionsUnion";

export class GetClassifierCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetClassifierInput,
      OutputTypesUnion,
      GetClassifierOutput,
      GlueResolvedConfiguration,
      Blob
    > {
  readonly model = GetClassifier;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetClassifierInput,
    GetClassifierOutput,
    Blob
  >();

  constructor(readonly input: GetClassifierInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: GlueResolvedConfiguration
  ): __aws_sdk_types.Handler<GetClassifierInput, GetClassifierOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetClassifierInput, GetClassifierOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
