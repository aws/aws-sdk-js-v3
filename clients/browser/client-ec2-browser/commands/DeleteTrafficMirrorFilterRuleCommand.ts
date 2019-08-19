import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteTrafficMirrorFilterRule } from "../model/operations/DeleteTrafficMirrorFilterRule";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteTrafficMirrorFilterRuleInput } from "../types/DeleteTrafficMirrorFilterRuleInput";
import { DeleteTrafficMirrorFilterRuleOutput } from "../types/DeleteTrafficMirrorFilterRuleOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/DeleteTrafficMirrorFilterRuleInput";
export * from "../types/DeleteTrafficMirrorFilterRuleOutput";
export * from "../types/DeleteTrafficMirrorFilterRuleExceptionsUnion";

export class DeleteTrafficMirrorFilterRuleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteTrafficMirrorFilterRuleInput,
      OutputTypesUnion,
      DeleteTrafficMirrorFilterRuleOutput,
      EC2ResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteTrafficMirrorFilterRule;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteTrafficMirrorFilterRuleInput,
    DeleteTrafficMirrorFilterRuleOutput,
    Blob
  >();

  constructor(readonly input: DeleteTrafficMirrorFilterRuleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteTrafficMirrorFilterRuleInput,
    DeleteTrafficMirrorFilterRuleOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DeleteTrafficMirrorFilterRuleInput,
        DeleteTrafficMirrorFilterRuleOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
