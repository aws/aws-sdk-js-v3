import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeDomain } from "../model/operations/DescribeDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDomainInput } from "../types/DescribeDomainInput";
import { DescribeDomainOutput } from "../types/DescribeDomainOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DescribeDomainInput";
export * from "../types/DescribeDomainOutput";
export * from "../types/DescribeDomainExceptionsUnion";

export class DescribeDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeDomainInput,
      OutputTypesUnion,
      DescribeDomainOutput,
      WorkLinkResolvedConfiguration,
      Blob
    > {
  readonly model = DescribeDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDomainInput,
    DescribeDomainOutput,
    Blob
  >();

  constructor(readonly input: DescribeDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<DescribeDomainInput, DescribeDomainOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DescribeDomainInput, DescribeDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
