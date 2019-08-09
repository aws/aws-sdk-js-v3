import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartAssociationsOnce } from "../model/StartAssociationsOnce";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartAssociationsOnceInput } from "../types/StartAssociationsOnceInput";
import { StartAssociationsOnceOutput } from "../types/StartAssociationsOnceOutput";
import { SSMResolvedConfiguration } from "../SSMConfiguration";
export * from "../types/StartAssociationsOnceInput";
export * from "../types/StartAssociationsOnceOutput";
export * from "../types/StartAssociationsOnceExceptionsUnion";

export class StartAssociationsOnceCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartAssociationsOnceInput,
      OutputTypesUnion,
      StartAssociationsOnceOutput,
      SSMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartAssociationsOnce;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartAssociationsOnceInput,
    StartAssociationsOnceOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartAssociationsOnceInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: SSMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StartAssociationsOnceInput,
    StartAssociationsOnceOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartAssociationsOnceInput, StartAssociationsOnceOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
