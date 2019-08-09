import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UndeprecateDomain } from "../model/UndeprecateDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UndeprecateDomainInput } from "../types/UndeprecateDomainInput";
import { UndeprecateDomainOutput } from "../types/UndeprecateDomainOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/UndeprecateDomainInput";
export * from "../types/UndeprecateDomainOutput";
export * from "../types/UndeprecateDomainExceptionsUnion";

export class UndeprecateDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UndeprecateDomainInput,
      OutputTypesUnion,
      UndeprecateDomainOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = UndeprecateDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UndeprecateDomainInput,
    UndeprecateDomainOutput,
    Blob
  >();

  constructor(readonly input: UndeprecateDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<UndeprecateDomainInput, UndeprecateDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UndeprecateDomainInput, UndeprecateDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
