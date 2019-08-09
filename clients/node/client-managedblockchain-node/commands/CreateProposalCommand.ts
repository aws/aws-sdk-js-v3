import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateProposal } from "../model/CreateProposal";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateProposalInput } from "../types/CreateProposalInput";
import { CreateProposalOutput } from "../types/CreateProposalOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/CreateProposalInput";
export * from "../types/CreateProposalOutput";
export * from "../types/CreateProposalExceptionsUnion";

export class CreateProposalCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateProposalInput,
      OutputTypesUnion,
      CreateProposalOutput,
      ManagedBlockchainResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateProposal;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateProposalInput,
    CreateProposalOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateProposalInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateProposalInput, CreateProposalOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateProposalInput, CreateProposalOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
