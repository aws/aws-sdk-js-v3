import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { VoteOnProposal } from "../model/VoteOnProposal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { VoteOnProposalInput } from "../types/VoteOnProposalInput";
import { VoteOnProposalOutput } from "../types/VoteOnProposalOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/VoteOnProposalInput";
export * from "../types/VoteOnProposalOutput";
export * from "../types/VoteOnProposalExceptionsUnion";

export class VoteOnProposalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      VoteOnProposalInput,
      OutputTypesUnion,
      VoteOnProposalOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = VoteOnProposal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    VoteOnProposalInput,
    VoteOnProposalOutput,
    Blob
  >();

  constructor(readonly input: VoteOnProposalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<VoteOnProposalInput, VoteOnProposalOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<VoteOnProposalInput, VoteOnProposalOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
