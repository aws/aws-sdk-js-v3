import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSuite } from "../model/operations/GetSuite";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSuiteInput } from "../types/GetSuiteInput";
import { GetSuiteOutput } from "../types/GetSuiteOutput";
import { DeviceFarmResolvedConfiguration } from "../DeviceFarmConfiguration";
export * from "../types/GetSuiteInput";
export * from "../types/GetSuiteOutput";
export * from "../types/GetSuiteExceptionsUnion";

export class GetSuiteCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSuiteInput,
      OutputTypesUnion,
      GetSuiteOutput,
      DeviceFarmResolvedConfiguration,
      Blob
    > {
  readonly model = GetSuite;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSuiteInput,
    GetSuiteOutput,
    Blob
  >();

  constructor(readonly input: GetSuiteInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: DeviceFarmResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSuiteInput, GetSuiteOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSuiteInput, GetSuiteOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
