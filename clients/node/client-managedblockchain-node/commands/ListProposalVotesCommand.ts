import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListProposalVotes } from "../model/operations/ListProposalVotes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProposalVotesInput } from "../types/ListProposalVotesInput";
import { ListProposalVotesOutput } from "../types/ListProposalVotesOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/ListProposalVotesInput";
export * from "../types/ListProposalVotesOutput";
export * from "../types/ListProposalVotesExceptionsUnion";

export class ListProposalVotesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProposalVotesInput,
      OutputTypesUnion,
      ListProposalVotesOutput,
      ManagedBlockchainResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListProposalVotes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProposalVotesInput,
    ListProposalVotesOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListProposalVotesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<ListProposalVotesInput, ListProposalVotesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProposalVotesInput, ListProposalVotesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
