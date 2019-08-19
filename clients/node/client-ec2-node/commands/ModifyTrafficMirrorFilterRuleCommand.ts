import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyTrafficMirrorFilterRule } from "../model/operations/ModifyTrafficMirrorFilterRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyTrafficMirrorFilterRuleInput } from "../types/ModifyTrafficMirrorFilterRuleInput";
import { ModifyTrafficMirrorFilterRuleOutput } from "../types/ModifyTrafficMirrorFilterRuleOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/ModifyTrafficMirrorFilterRuleInput";
export * from "../types/ModifyTrafficMirrorFilterRuleOutput";
export * from "../types/ModifyTrafficMirrorFilterRuleExceptionsUnion";

export class ModifyTrafficMirrorFilterRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyTrafficMirrorFilterRuleInput,
      OutputTypesUnion,
      ModifyTrafficMirrorFilterRuleOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyTrafficMirrorFilterRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyTrafficMirrorFilterRuleInput,
    ModifyTrafficMirrorFilterRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyTrafficMirrorFilterRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyTrafficMirrorFilterRuleInput,
    ModifyTrafficMirrorFilterRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyTrafficMirrorFilterRuleInput,
        ModifyTrafficMirrorFilterRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
