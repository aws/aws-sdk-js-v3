import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StopStack } from "../model/StopStack";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopStackInput } from "../types/StopStackInput";
import { StopStackOutput } from "../types/StopStackOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/StopStackInput";
export * from "../types/StopStackOutput";
export * from "../types/StopStackExceptionsUnion";

export class StopStackCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopStackInput,
      OutputTypesUnion,
      StopStackOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StopStack;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopStackInput,
    StopStackOutput,
    _stream.Readable
  >();

  constructor(readonly input: StopStackInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<StopStackInput, StopStackOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopStackInput, StopStackOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
