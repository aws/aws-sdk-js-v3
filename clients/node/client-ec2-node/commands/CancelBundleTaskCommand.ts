import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CancelBundleTask } from "../model/CancelBundleTask";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CancelBundleTaskInput } from "../types/CancelBundleTaskInput";
import { CancelBundleTaskOutput } from "../types/CancelBundleTaskOutput";
import { EC2ResolvedConfiguration } from "../EC2Configuration";
export * from "../types/CancelBundleTaskInput";
export * from "../types/CancelBundleTaskOutput";
export * from "../types/CancelBundleTaskExceptionsUnion";

export class CancelBundleTaskCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CancelBundleTaskInput,
      OutputTypesUnion,
      CancelBundleTaskOutput,
      EC2ResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CancelBundleTask;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CancelBundleTaskInput,
    CancelBundleTaskOutput,
    _stream.Readable
  >();

  constructor(readonly input: CancelBundleTaskInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: EC2ResolvedConfiguration
  ): __aws_sdk_types.Handler<CancelBundleTaskInput, CancelBundleTaskOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CancelBundleTaskInput, CancelBundleTaskOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
