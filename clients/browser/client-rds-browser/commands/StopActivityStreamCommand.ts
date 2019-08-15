import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { StopActivityStream } from "../model/operations/StopActivityStream";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StopActivityStreamInput } from "../types/StopActivityStreamInput";
import { StopActivityStreamOutput } from "../types/StopActivityStreamOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/StopActivityStreamInput";
export * from "../types/StopActivityStreamOutput";
export * from "../types/StopActivityStreamExceptionsUnion";

export class StopActivityStreamCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StopActivityStreamInput,
      OutputTypesUnion,
      StopActivityStreamOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = StopActivityStream;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StopActivityStreamInput,
    StopActivityStreamOutput,
    Blob
  >();

  constructor(readonly input: StopActivityStreamInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    StopActivityStreamInput,
    StopActivityStreamOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StopActivityStreamInput, StopActivityStreamOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
