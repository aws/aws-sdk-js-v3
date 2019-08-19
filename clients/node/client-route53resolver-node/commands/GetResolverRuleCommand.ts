import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetResolverRule } from "../model/operations/GetResolverRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetResolverRuleInput } from "../types/GetResolverRuleInput";
import { GetResolverRuleOutput } from "../types/GetResolverRuleOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/GetResolverRuleInput";
export * from "../types/GetResolverRuleOutput";
export * from "../types/GetResolverRuleExceptionsUnion";

export class GetResolverRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetResolverRuleInput,
      OutputTypesUnion,
      GetResolverRuleOutput,
      Route53ResolverResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetResolverRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetResolverRuleInput,
    GetResolverRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetResolverRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<GetResolverRuleInput, GetResolverRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetResolverRuleInput, GetResolverRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
