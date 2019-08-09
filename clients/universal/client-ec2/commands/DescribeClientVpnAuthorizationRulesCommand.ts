import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DescribeClientVpnAuthorizationRules } from "../model/DescribeClientVpnAuthorizationRules";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribeClientVpnAuthorizationRulesInput } from "../types/DescribeClientVpnAuthorizationRulesInput";
import { DescribeClientVpnAuthorizationRulesOutput } from "../types/DescribeClientVpnAuthorizationRulesOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DescribeClientVpnAuthorizationRulesInput";
export * from "../types/DescribeClientVpnAuthorizationRulesOutput";
export * from "../types/DescribeClientVpnAuthorizationRulesExceptionsUnion";

export class DescribeClientVpnAuthorizationRulesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribeClientVpnAuthorizationRulesInput,
      OutputTypesUnion,
      DescribeClientVpnAuthorizationRulesOutput,
      EC2ResolvedConfiguration,
      Uint8Array
    > {
  readonly model = DescribeClientVpnAuthorizationRules;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribeClientVpnAuthorizationRulesInput,
    DescribeClientVpnAuthorizationRulesOutput,
    Uint8Array
  >();

  constructor(readonly input: DescribeClientVpnAuthorizationRulesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribeClientVpnAuthorizationRulesInput,
    DescribeClientVpnAuthorizationRulesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribeClientVpnAuthorizationRulesInput,
        DescribeClientVpnAuthorizationRulesOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
