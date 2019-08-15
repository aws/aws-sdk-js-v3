import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateAutoScalingGroup } from "../model/operations/CreateAutoScalingGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateAutoScalingGroupInput } from "../types/CreateAutoScalingGroupInput";
import { CreateAutoScalingGroupOutput } from "../types/CreateAutoScalingGroupOutput";
import { AutoScalingResolvedConfiguration } from "../AutoScalingConfiguration";
export * from "../types/CreateAutoScalingGroupInput";
export * from "../types/CreateAutoScalingGroupOutput";
export * from "../types/CreateAutoScalingGroupExceptionsUnion";

export class CreateAutoScalingGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateAutoScalingGroupInput,
      OutputTypesUnion,
      CreateAutoScalingGroupOutput,
      AutoScalingResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateAutoScalingGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateAutoScalingGroupInput,
    CreateAutoScalingGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateAutoScalingGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: AutoScalingResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateAutoScalingGroupInput,
    CreateAutoScalingGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateAutoScalingGroupInput, CreateAutoScalingGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
