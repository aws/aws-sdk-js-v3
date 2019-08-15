import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateRuleGroup } from "../model/operations/CreateRuleGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateRuleGroupInput } from "../types/CreateRuleGroupInput";
import { CreateRuleGroupOutput } from "../types/CreateRuleGroupOutput";
import { WAFResolvedConfiguration } from "../WAFConfiguration";
export * from "../types/CreateRuleGroupInput";
export * from "../types/CreateRuleGroupOutput";
export * from "../types/CreateRuleGroupExceptionsUnion";

export class CreateRuleGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateRuleGroupInput,
      OutputTypesUnion,
      CreateRuleGroupOutput,
      WAFResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateRuleGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateRuleGroupInput,
    CreateRuleGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateRuleGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WAFResolvedConfiguration
  ): __aws_sdk_types.Handler<CreateRuleGroupInput, CreateRuleGroupOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateRuleGroupInput, CreateRuleGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
