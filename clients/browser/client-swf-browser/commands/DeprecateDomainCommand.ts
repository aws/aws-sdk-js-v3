import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeprecateDomain } from "../model/DeprecateDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeprecateDomainInput } from "../types/DeprecateDomainInput";
import { DeprecateDomainOutput } from "../types/DeprecateDomainOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
export * from "../types/DeprecateDomainInput";
export * from "../types/DeprecateDomainOutput";
export * from "../types/DeprecateDomainExceptionsUnion";

export class DeprecateDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeprecateDomainInput,
      OutputTypesUnion,
      DeprecateDomainOutput,
      SWFResolvedConfiguration,
      Blob
    > {
  readonly model = DeprecateDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeprecateDomainInput,
    DeprecateDomainOutput,
    Blob
  >();

  constructor(readonly input: DeprecateDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SWFResolvedConfiguration
  ): __aws_sdk_types.Handler<DeprecateDomainInput, DeprecateDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeprecateDomainInput, DeprecateDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
