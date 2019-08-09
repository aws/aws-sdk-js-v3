import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListProposals } from "../model/ListProposals";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProposalsInput } from "../types/ListProposalsInput";
import { ListProposalsOutput } from "../types/ListProposalsOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/ListProposalsInput";
export * from "../types/ListProposalsOutput";
export * from "../types/ListProposalsExceptionsUnion";

export class ListProposalsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProposalsInput,
      OutputTypesUnion,
      ListProposalsOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = ListProposals;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProposalsInput,
    ListProposalsOutput,
    Blob
  >();

  constructor(readonly input: ListProposalsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<ListProposalsInput, ListProposalsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProposalsInput, ListProposalsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
