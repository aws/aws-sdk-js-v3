import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SkipWaitTimeForInstanceTermination } from "../model/SkipWaitTimeForInstanceTermination";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SkipWaitTimeForInstanceTerminationInput } from "../types/SkipWaitTimeForInstanceTerminationInput";
import { SkipWaitTimeForInstanceTerminationOutput } from "../types/SkipWaitTimeForInstanceTerminationOutput";
import { CodeDeployResolvedConfiguration } from "../CodeDeployConfiguration";
export * from "../types/SkipWaitTimeForInstanceTerminationInput";
export * from "../types/SkipWaitTimeForInstanceTerminationOutput";
export * from "../types/SkipWaitTimeForInstanceTerminationExceptionsUnion";

export class SkipWaitTimeForInstanceTerminationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SkipWaitTimeForInstanceTerminationInput,
      OutputTypesUnion,
      SkipWaitTimeForInstanceTerminationOutput,
      CodeDeployResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SkipWaitTimeForInstanceTermination;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SkipWaitTimeForInstanceTerminationInput,
    SkipWaitTimeForInstanceTerminationOutput,
    _stream.Readable
  >();

  constructor(readonly input: SkipWaitTimeForInstanceTerminationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CodeDeployResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SkipWaitTimeForInstanceTerminationInput,
    SkipWaitTimeForInstanceTerminationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        SkipWaitTimeForInstanceTerminationInput,
        SkipWaitTimeForInstanceTerminationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
