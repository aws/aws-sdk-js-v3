import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetSecurityGroups } from "../model/operations/SetSecurityGroups";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetSecurityGroupsInput } from "../types/SetSecurityGroupsInput";
import { SetSecurityGroupsOutput } from "../types/SetSecurityGroupsOutput";
import { ElasticLoadBalancingv2ResolvedConfiguration } from "../ElasticLoadBalancingv2Configuration";
export * from "../types/SetSecurityGroupsInput";
export * from "../types/SetSecurityGroupsOutput";
export * from "../types/SetSecurityGroupsExceptionsUnion";

export class SetSecurityGroupsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetSecurityGroupsInput,
      OutputTypesUnion,
      SetSecurityGroupsOutput,
      ElasticLoadBalancingv2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetSecurityGroups;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetSecurityGroupsInput,
    SetSecurityGroupsOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetSecurityGroupsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingv2ResolvedConfiguration
  ): __aws_sdk_types.Handler<SetSecurityGroupsInput, SetSecurityGroupsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetSecurityGroupsInput, SetSecurityGroupsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
