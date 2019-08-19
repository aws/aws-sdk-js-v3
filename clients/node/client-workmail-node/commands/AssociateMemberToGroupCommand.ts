import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AssociateMemberToGroup } from "../model/operations/AssociateMemberToGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AssociateMemberToGroupInput } from "../types/AssociateMemberToGroupInput";
import { AssociateMemberToGroupOutput } from "../types/AssociateMemberToGroupOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/AssociateMemberToGroupInput";
export * from "../types/AssociateMemberToGroupOutput";
export * from "../types/AssociateMemberToGroupExceptionsUnion";

export class AssociateMemberToGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AssociateMemberToGroupInput,
      OutputTypesUnion,
      AssociateMemberToGroupOutput,
      WorkMailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AssociateMemberToGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AssociateMemberToGroupInput,
    AssociateMemberToGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: AssociateMemberToGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AssociateMemberToGroupInput,
    AssociateMemberToGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AssociateMemberToGroupInput, AssociateMemberToGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
