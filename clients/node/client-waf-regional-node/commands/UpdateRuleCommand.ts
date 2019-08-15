import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateRule } from "../model/operations/UpdateRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateRuleInput } from "../types/UpdateRuleInput";
import { UpdateRuleOutput } from "../types/UpdateRuleOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/UpdateRuleInput";
export * from "../types/UpdateRuleOutput";
export * from "../types/UpdateRuleExceptionsUnion";

export class UpdateRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateRuleInput,
      OutputTypesUnion,
      UpdateRuleOutput,
      WAFRegionalResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateRuleInput,
    UpdateRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<UpdateRuleInput, UpdateRuleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateRuleInput, UpdateRuleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
