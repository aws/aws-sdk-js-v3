import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetFaceSearch } from "../model/operations/GetFaceSearch";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetFaceSearchInput } from "../types/GetFaceSearchInput";
import { GetFaceSearchOutput } from "../types/GetFaceSearchOutput";
import { RekognitionResolvedConfiguration } from "../RekognitionConfiguration";
export * from "../types/GetFaceSearchInput";
export * from "../types/GetFaceSearchOutput";
export * from "../types/GetFaceSearchExceptionsUnion";

export class GetFaceSearchCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetFaceSearchInput,
      OutputTypesUnion,
      GetFaceSearchOutput,
      RekognitionResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetFaceSearch;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetFaceSearchInput,
    GetFaceSearchOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetFaceSearchInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RekognitionResolvedConfiguration
  ): __aws_sdk_types.Handler<GetFaceSearchInput, GetFaceSearchOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetFaceSearchInput, GetFaceSearchOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
