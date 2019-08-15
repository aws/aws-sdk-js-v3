import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RevokeSecurityGroupEgress } from "../model/operations/RevokeSecurityGroupEgress";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RevokeSecurityGroupEgressInput } from "../types/RevokeSecurityGroupEgressInput";
import { RevokeSecurityGroupEgressOutput } from "../types/RevokeSecurityGroupEgressOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/RevokeSecurityGroupEgressInput";
export * from "../types/RevokeSecurityGroupEgressOutput";
export * from "../types/RevokeSecurityGroupEgressExceptionsUnion";

export class RevokeSecurityGroupEgressCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RevokeSecurityGroupEgressInput,
      OutputTypesUnion,
      RevokeSecurityGroupEgressOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RevokeSecurityGroupEgress;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RevokeSecurityGroupEgressInput,
    RevokeSecurityGroupEgressOutput,
    _stream.Readable
  >();

  constructor(readonly input: RevokeSecurityGroupEgressInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RevokeSecurityGroupEgressInput,
    RevokeSecurityGroupEgressOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RevokeSecurityGroupEgressInput, RevokeSecurityGroupEgressOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
