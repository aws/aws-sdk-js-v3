import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetSegments } from "../model/operations/GetSegments";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetSegmentsInput } from "../types/GetSegmentsInput";
import { GetSegmentsOutput } from "../types/GetSegmentsOutput";
import { PinpointResolvedConfiguration } from "../PinpointConfiguration";
export * from "../types/GetSegmentsInput";
export * from "../types/GetSegmentsOutput";
export * from "../types/GetSegmentsExceptionsUnion";

export class GetSegmentsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetSegmentsInput,
      OutputTypesUnion,
      GetSegmentsOutput,
      PinpointResolvedConfiguration,
      Blob
    > {
  readonly model = GetSegments;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetSegmentsInput,
    GetSegmentsOutput,
    Blob
  >();

  constructor(readonly input: GetSegmentsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: PinpointResolvedConfiguration
  ): __aws_sdk_types.Handler<GetSegmentsInput, GetSegmentsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetSegmentsInput, GetSegmentsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
