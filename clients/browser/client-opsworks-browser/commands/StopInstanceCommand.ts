import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopInstance } from "../model/StopInstance";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopInstanceInput } from "../types/StopInstanceInput";
import { StopInstanceOutput } from "../types/StopInstanceOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/StopInstanceInput";
export * from "../types/StopInstanceOutput";
export * from "../types/StopInstanceExceptionsUnion";

export class StopInstanceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopInstanceInput,
      OutputTypesUnion,
      StopInstanceOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = StopInstance;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopInstanceInput,
    StopInstanceOutput,
    Blob
  >();

  constructor(readonly input: StopInstanceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<StopInstanceInput, StopInstanceOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopInstanceInput, StopInstanceOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
