import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { StartFaceSearch } from "../model/StartFaceSearch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { StartFaceSearchInput } from "../types/StartFaceSearchInput";
import { StartFaceSearchOutput } from "../types/StartFaceSearchOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/StartFaceSearchInput";
export * from "../types/StartFaceSearchOutput";
export * from "../types/StartFaceSearchExceptionsUnion";

export class StartFaceSearchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      StartFaceSearchInput,
      OutputTypesUnion,
      StartFaceSearchOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = StartFaceSearch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    StartFaceSearchInput,
    StartFaceSearchOutput,
    _stream.Readable
  >();

  constructor(readonly input: StartFaceSearchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<StartFaceSearchInput, StartFaceSearchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<StartFaceSearchInput, StartFaceSearchOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
