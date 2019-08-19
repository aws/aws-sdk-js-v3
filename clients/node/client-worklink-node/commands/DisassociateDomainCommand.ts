import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DisassociateDomain } from "../model/operations/DisassociateDomain";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DisassociateDomainInput } from "../types/DisassociateDomainInput";
import { DisassociateDomainOutput } from "../types/DisassociateDomainOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/DisassociateDomainInput";
export * from "../types/DisassociateDomainOutput";
export * from "../types/DisassociateDomainExceptionsUnion";

export class DisassociateDomainCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DisassociateDomainInput,
      OutputTypesUnion,
      DisassociateDomainOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DisassociateDomain;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DisassociateDomainInput,
    DisassociateDomainOutput,
    _stream.Readable
  >();

  constructor(readonly input: DisassociateDomainInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DisassociateDomainInput,
    DisassociateDomainOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DisassociateDomainInput, DisassociateDomainOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
