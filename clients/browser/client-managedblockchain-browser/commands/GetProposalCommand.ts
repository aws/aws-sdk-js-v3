import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetProposal } from "../model/operations/GetProposal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetProposalInput } from "../types/GetProposalInput";
import { GetProposalOutput } from "../types/GetProposalOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/GetProposalInput";
export * from "../types/GetProposalOutput";
export * from "../types/GetProposalExceptionsUnion";

export class GetProposalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetProposalInput,
      OutputTypesUnion,
      GetProposalOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = GetProposal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetProposalInput,
    GetProposalOutput,
    Blob
  >();

  constructor(readonly input: GetProposalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<GetProposalInput, GetProposalOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetProposalInput, GetProposalOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
