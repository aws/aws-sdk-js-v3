import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListDetectorModelVersions } from "../model/operations/ListDetectorModelVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListDetectorModelVersionsInput } from "../types/ListDetectorModelVersionsInput";
import { ListDetectorModelVersionsOutput } from "../types/ListDetectorModelVersionsOutput";
import { IoTEventsResolvedConfiguration } from "../IoTEventsConfiguration";
export * from "../types/ListDetectorModelVersionsInput";
export * from "../types/ListDetectorModelVersionsOutput";
export * from "../types/ListDetectorModelVersionsExceptionsUnion";

export class ListDetectorModelVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListDetectorModelVersionsInput,
      OutputTypesUnion,
      ListDetectorModelVersionsOutput,
      IoTEventsResolvedConfiguration,
      Blob
    > {
  readonly model = ListDetectorModelVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListDetectorModelVersionsInput,
    ListDetectorModelVersionsOutput,
    Blob
  >();

  constructor(readonly input: ListDetectorModelVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: IoTEventsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListDetectorModelVersionsInput,
    ListDetectorModelVersionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListDetectorModelVersionsInput, ListDetectorModelVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
