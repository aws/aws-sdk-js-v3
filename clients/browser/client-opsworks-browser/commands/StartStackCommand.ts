import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StartStack } from "../model/StartStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartStackInput } from "../types/StartStackInput";
import { StartStackOutput } from "../types/StartStackOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/StartStackInput";
export * from "../types/StartStackOutput";
export * from "../types/StartStackExceptionsUnion";

export class StartStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartStackInput,
      OutputTypesUnion,
      StartStackOutput,
      OpsWorksResolvedConfiguration,
      Blob
    > {
  readonly model = StartStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartStackInput,
    StartStackOutput,
    Blob
  >();

  constructor(readonly input: StartStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<StartStackInput, StartStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartStackInput, StartStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
