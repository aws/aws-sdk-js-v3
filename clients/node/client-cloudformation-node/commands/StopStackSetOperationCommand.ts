import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopStackSetOperation } from "../model/operations/StopStackSetOperation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopStackSetOperationInput } from "../types/StopStackSetOperationInput";
import { StopStackSetOperationOutput } from "../types/StopStackSetOperationOutput";
import { CloudFormationResolvedConfiguration } from "../CloudFormationConfiguration";
export * from "../types/StopStackSetOperationInput";
export * from "../types/StopStackSetOperationOutput";
export * from "../types/StopStackSetOperationExceptionsUnion";

export class StopStackSetOperationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopStackSetOperationInput,
      OutputTypesUnion,
      StopStackSetOperationOutput,
      CloudFormationResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopStackSetOperation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopStackSetOperationInput,
    StopStackSetOperationOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopStackSetOperationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudFormationResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopStackSetOperationInput,
    StopStackSetOperationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopStackSetOperationInput, StopStackSetOperationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
