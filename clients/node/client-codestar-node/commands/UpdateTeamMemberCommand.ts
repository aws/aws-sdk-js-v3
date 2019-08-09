import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateTeamMember } from "../model/UpdateTeamMember";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateTeamMemberInput } from "../types/UpdateTeamMemberInput";
import { UpdateTeamMemberOutput } from "../types/UpdateTeamMemberOutput";
import { CodeStarResolvedConfiguration } from "../CodeStarConfiguration";
export * from "../types/UpdateTeamMemberInput";
export * from "../types/UpdateTeamMemberOutput";
export * from "../types/UpdateTeamMemberExceptionsUnion";

export class UpdateTeamMemberCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateTeamMemberInput,
      OutputTypesUnion,
      UpdateTeamMemberOutput,
      CodeStarResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateTeamMember;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateTeamMemberInput,
    UpdateTeamMemberOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateTeamMemberInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeStarResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateTeamMemberInput, UpdateTeamMemberOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateTeamMemberInput, UpdateTeamMemberOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
