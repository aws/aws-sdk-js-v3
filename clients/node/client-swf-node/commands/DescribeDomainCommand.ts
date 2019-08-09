import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribeDomain } from "../model/DescribeDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeDomainInput } from "../types/DescribeDomainInput";
import { DescribeDomainOutput } from "../types/DescribeDomainOutput";
import { SWFResolvedConfiguration } from "../SWFConfiguration";
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
      SWFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribeDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeDomainInput,
    DescribeDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribeDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SWFResolvedConfiguration
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
