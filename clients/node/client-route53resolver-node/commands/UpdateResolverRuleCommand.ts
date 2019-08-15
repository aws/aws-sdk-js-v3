import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateResolverRule } from "../model/operations/UpdateResolverRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateResolverRuleInput } from "../types/UpdateResolverRuleInput";
import { UpdateResolverRuleOutput } from "../types/UpdateResolverRuleOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/UpdateResolverRuleInput";
export * from "../types/UpdateResolverRuleOutput";
export * from "../types/UpdateResolverRuleExceptionsUnion";

export class UpdateResolverRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateResolverRuleInput,
      OutputTypesUnion,
      UpdateResolverRuleOutput,
      Route53ResolverResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateResolverRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateResolverRuleInput,
    UpdateResolverRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateResolverRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateResolverRuleInput,
    UpdateResolverRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateResolverRuleInput, UpdateResolverRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
