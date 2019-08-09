import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GenerateServiceLastAccessedDetails } from "../model/GenerateServiceLastAccessedDetails";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GenerateServiceLastAccessedDetailsInput } from "../types/GenerateServiceLastAccessedDetailsInput";
import { GenerateServiceLastAccessedDetailsOutput } from "../types/GenerateServiceLastAccessedDetailsOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GenerateServiceLastAccessedDetailsInput";
export * from "../types/GenerateServiceLastAccessedDetailsOutput";
export * from "../types/GenerateServiceLastAccessedDetailsExceptionsUnion";

export class GenerateServiceLastAccessedDetailsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GenerateServiceLastAccessedDetailsInput,
      OutputTypesUnion,
      GenerateServiceLastAccessedDetailsOutput,
      IAMResolvedConfiguration,
      Blob
    > {
  readonly model = GenerateServiceLastAccessedDetails;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GenerateServiceLastAccessedDetailsInput,
    GenerateServiceLastAccessedDetailsOutput,
    Blob
  >();

  constructor(readonly input: GenerateServiceLastAccessedDetailsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GenerateServiceLastAccessedDetailsInput,
    GenerateServiceLastAccessedDetailsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GenerateServiceLastAccessedDetailsInput,
        GenerateServiceLastAccessedDetailsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
