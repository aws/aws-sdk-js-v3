import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetActivityTask } from "../model/GetActivityTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetActivityTaskInput } from "../types/GetActivityTaskInput";
import { GetActivityTaskOutput } from "../types/GetActivityTaskOutput";
import { SFNResolvedConfiguration } from "../SFNConfiguration";
export * from "../types/GetActivityTaskInput";
export * from "../types/GetActivityTaskOutput";
export * from "../types/GetActivityTaskExceptionsUnion";

export class GetActivityTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetActivityTaskInput,
      OutputTypesUnion,
      GetActivityTaskOutput,
      SFNResolvedConfiguration,
      Blob
    > {
  readonly model = GetActivityTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetActivityTaskInput,
    GetActivityTaskOutput,
    Blob
  >();

  constructor(readonly input: GetActivityTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SFNResolvedConfiguration
  ): __aws_sdk_types.Handler<GetActivityTaskInput, GetActivityTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetActivityTaskInput, GetActivityTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
