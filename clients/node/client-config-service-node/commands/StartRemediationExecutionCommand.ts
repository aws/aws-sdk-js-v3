import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartRemediationExecution } from "../model/StartRemediationExecution";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartRemediationExecutionInput } from "../types/StartRemediationExecutionInput";
import { StartRemediationExecutionOutput } from "../types/StartRemediationExecutionOutput";
import { ConfigServiceResolvedConfiguration } from "../ConfigServiceConfiguration";
export * from "../types/StartRemediationExecutionInput";
export * from "../types/StartRemediationExecutionOutput";
export * from "../types/StartRemediationExecutionExceptionsUnion";

export class StartRemediationExecutionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartRemediationExecutionInput,
      OutputTypesUnion,
      StartRemediationExecutionOutput,
      ConfigServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartRemediationExecution;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartRemediationExecutionInput,
    StartRemediationExecutionOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartRemediationExecutionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ConfigServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartRemediationExecutionInput,
    StartRemediationExecutionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartRemediationExecutionInput, StartRemediationExecutionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
