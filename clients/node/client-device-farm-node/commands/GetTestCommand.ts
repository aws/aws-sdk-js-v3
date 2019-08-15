import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetTest } from "../model/operations/GetTest";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTestInput } from "../types/GetTestInput";
import { GetTestOutput } from "../types/GetTestOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetTestInput";
export * from "../types/GetTestOutput";
export * from "../types/GetTestExceptionsUnion";

export class GetTestCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTestInput,
      OutputTypesUnion,
      GetTestOutput,
      DeviceFarmResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetTest;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTestInput,
    GetTestOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetTestInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetTestInput, GetTestOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetTestInput, GetTestOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
