import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateMember } from "../model/operations/CreateMember";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateMemberInput } from "../types/CreateMemberInput";
import { CreateMemberOutput } from "../types/CreateMemberOutput";
import { ManagedBlockchainResolvedConfiguration } from "../ManagedBlockchainConfiguration";
export * from "../types/CreateMemberInput";
export * from "../types/CreateMemberOutput";
export * from "../types/CreateMemberExceptionsUnion";

export class CreateMemberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateMemberInput,
      OutputTypesUnion,
      CreateMemberOutput,
      ManagedBlockchainResolvedConfiguration,
      Blob
    > {
  readonly model = CreateMember;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateMemberInput,
    CreateMemberOutput,
    Blob
  >();

  constructor(readonly input: CreateMemberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ManagedBlockchainResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateMemberInput, CreateMemberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateMemberInput, CreateMemberOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
