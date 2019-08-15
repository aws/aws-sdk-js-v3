import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateLBCookieStickinessPolicy } from "../model/operations/CreateLBCookieStickinessPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateLBCookieStickinessPolicyInput } from "../types/CreateLBCookieStickinessPolicyInput";
import { CreateLBCookieStickinessPolicyOutput } from "../types/CreateLBCookieStickinessPolicyOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/CreateLBCookieStickinessPolicyInput";
export * from "../types/CreateLBCookieStickinessPolicyOutput";
export * from "../types/CreateLBCookieStickinessPolicyExceptionsUnion";

export class CreateLBCookieStickinessPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateLBCookieStickinessPolicyInput,
      OutputTypesUnion,
      CreateLBCookieStickinessPolicyOutput,
      ElasticLoadBalancingResolvedConfiguration,
      Blob
    > {
  readonly model = CreateLBCookieStickinessPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateLBCookieStickinessPolicyInput,
    CreateLBCookieStickinessPolicyOutput,
    Blob
  >();

  constructor(readonly input: CreateLBCookieStickinessPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateLBCookieStickinessPolicyInput,
    CreateLBCookieStickinessPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateLBCookieStickinessPolicyInput,
        CreateLBCookieStickinessPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
