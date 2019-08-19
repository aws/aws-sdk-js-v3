import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AuthorizeSecurityGroupEgress } from "../model/operations/AuthorizeSecurityGroupEgress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AuthorizeSecurityGroupEgressInput } from "../types/AuthorizeSecurityGroupEgressInput";
import { AuthorizeSecurityGroupEgressOutput } from "../types/AuthorizeSecurityGroupEgressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/AuthorizeSecurityGroupEgressInput";
export * from "../types/AuthorizeSecurityGroupEgressOutput";
export * from "../types/AuthorizeSecurityGroupEgressExceptionsUnion";

export class AuthorizeSecurityGroupEgressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AuthorizeSecurityGroupEgressInput,
      OutputTypesUnion,
      AuthorizeSecurityGroupEgressOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AuthorizeSecurityGroupEgress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AuthorizeSecurityGroupEgressInput,
    AuthorizeSecurityGroupEgressOutput,
    _stream.Readable
  >();

  constructor(readonly input: AuthorizeSecurityGroupEgressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AuthorizeSecurityGroupEgressInput,
    AuthorizeSecurityGroupEgressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        AuthorizeSecurityGroupEgressInput,
        AuthorizeSecurityGroupEgressOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
