import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateResolverRule } from "../model/CreateResolverRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateResolverRuleInput } from "../types/CreateResolverRuleInput";
import { CreateResolverRuleOutput } from "../types/CreateResolverRuleOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/CreateResolverRuleInput";
export * from "../types/CreateResolverRuleOutput";
export * from "../types/CreateResolverRuleExceptionsUnion";

export class CreateResolverRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateResolverRuleInput,
      OutputTypesUnion,
      CreateResolverRuleOutput,
      Route53ResolverResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateResolverRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateResolverRuleInput,
    CreateResolverRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateResolverRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateResolverRuleInput,
    CreateResolverRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateResolverRuleInput, CreateResolverRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
