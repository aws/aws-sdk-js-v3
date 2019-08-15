import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateTrafficMirrorFilterRule } from "../model/operations/CreateTrafficMirrorFilterRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateTrafficMirrorFilterRuleInput } from "../types/CreateTrafficMirrorFilterRuleInput";
import { CreateTrafficMirrorFilterRuleOutput } from "../types/CreateTrafficMirrorFilterRuleOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CreateTrafficMirrorFilterRuleInput";
export * from "../types/CreateTrafficMirrorFilterRuleOutput";
export * from "../types/CreateTrafficMirrorFilterRuleExceptionsUnion";

export class CreateTrafficMirrorFilterRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateTrafficMirrorFilterRuleInput,
      OutputTypesUnion,
      CreateTrafficMirrorFilterRuleOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateTrafficMirrorFilterRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateTrafficMirrorFilterRuleInput,
    CreateTrafficMirrorFilterRuleOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateTrafficMirrorFilterRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateTrafficMirrorFilterRuleInput,
    CreateTrafficMirrorFilterRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateTrafficMirrorFilterRuleInput,
        CreateTrafficMirrorFilterRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
