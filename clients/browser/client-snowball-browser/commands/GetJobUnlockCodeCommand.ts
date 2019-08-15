import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetJobUnlockCode } from "../model/operations/GetJobUnlockCode";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetJobUnlockCodeInput } from "../types/GetJobUnlockCodeInput";
import { GetJobUnlockCodeOutput } from "../types/GetJobUnlockCodeOutput";
import { SnowballResolvedConfiguration } from "../SnowballConfiguration";
export * from "../types/GetJobUnlockCodeInput";
export * from "../types/GetJobUnlockCodeOutput";
export * from "../types/GetJobUnlockCodeExceptionsUnion";

export class GetJobUnlockCodeCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetJobUnlockCodeInput,
      OutputTypesUnion,
      GetJobUnlockCodeOutput,
      SnowballResolvedConfiguration,
      Blob
    > {
  readonly model = GetJobUnlockCode;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetJobUnlockCodeInput,
    GetJobUnlockCodeOutput,
    Blob
  >();

  constructor(readonly input: GetJobUnlockCodeInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SnowballResolvedConfiguration
  ): __aws_sdk_types.Handler<GetJobUnlockCodeInput, GetJobUnlockCodeOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetJobUnlockCodeInput, GetJobUnlockCodeOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
