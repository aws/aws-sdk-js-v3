import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DeleteResolverRule } from "../model/operations/DeleteResolverRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteResolverRuleInput } from "../types/DeleteResolverRuleInput";
import { DeleteResolverRuleOutput } from "../types/DeleteResolverRuleOutput";
import { Route53ResolverResolvedConfiguration } from "../Route53ResolverConfiguration";
export * from "../types/DeleteResolverRuleInput";
export * from "../types/DeleteResolverRuleOutput";
export * from "../types/DeleteResolverRuleExceptionsUnion";

export class DeleteResolverRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteResolverRuleInput,
      OutputTypesUnion,
      DeleteResolverRuleOutput,
      Route53ResolverResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DeleteResolverRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteResolverRuleInput,
    DeleteResolverRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: DeleteResolverRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: Route53ResolverResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteResolverRuleInput,
    DeleteResolverRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteResolverRuleInput, DeleteResolverRuleOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
