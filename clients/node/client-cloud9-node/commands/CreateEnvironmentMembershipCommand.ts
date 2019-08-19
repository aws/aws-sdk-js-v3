import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateEnvironmentMembership } from "../model/operations/CreateEnvironmentMembership";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateEnvironmentMembershipInput } from "../types/CreateEnvironmentMembershipInput";
import { CreateEnvironmentMembershipOutput } from "../types/CreateEnvironmentMembershipOutput";
import { Cloud9ResolvedConfiguration } from "../Cloud9Configuration";
export * from "../types/CreateEnvironmentMembershipInput";
export * from "../types/CreateEnvironmentMembershipOutput";
export * from "../types/CreateEnvironmentMembershipExceptionsUnion";

export class CreateEnvironmentMembershipCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateEnvironmentMembershipInput,
      OutputTypesUnion,
      CreateEnvironmentMembershipOutput,
      Cloud9ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateEnvironmentMembership;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateEnvironmentMembershipInput,
    CreateEnvironmentMembershipOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateEnvironmentMembershipInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Cloud9ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateEnvironmentMembershipInput,
    CreateEnvironmentMembershipOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateEnvironmentMembershipInput,
        CreateEnvironmentMembershipOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
