import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateAppCookieStickinessPolicy } from "../model/operations/CreateAppCookieStickinessPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAppCookieStickinessPolicyInput } from "../types/CreateAppCookieStickinessPolicyInput";
import { CreateAppCookieStickinessPolicyOutput } from "../types/CreateAppCookieStickinessPolicyOutput";
import { ElasticLoadBalancingResolvedConfiguration } from "../ElasticLoadBalancingConfiguration";
export * from "../types/CreateAppCookieStickinessPolicyInput";
export * from "../types/CreateAppCookieStickinessPolicyOutput";
export * from "../types/CreateAppCookieStickinessPolicyExceptionsUnion";

export class CreateAppCookieStickinessPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAppCookieStickinessPolicyInput,
      OutputTypesUnion,
      CreateAppCookieStickinessPolicyOutput,
      ElasticLoadBalancingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateAppCookieStickinessPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAppCookieStickinessPolicyInput,
    CreateAppCookieStickinessPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateAppCookieStickinessPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ElasticLoadBalancingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateAppCookieStickinessPolicyInput,
    CreateAppCookieStickinessPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateAppCookieStickinessPolicyInput,
        CreateAppCookieStickinessPolicyOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
