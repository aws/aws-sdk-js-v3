import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetIntentVersions } from "../model/GetIntentVersions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetIntentVersionsInput } from "../types/GetIntentVersionsInput";
import { GetIntentVersionsOutput } from "../types/GetIntentVersionsOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetIntentVersionsInput";
export * from "../types/GetIntentVersionsOutput";
export * from "../types/GetIntentVersionsExceptionsUnion";

export class GetIntentVersionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetIntentVersionsInput,
      OutputTypesUnion,
      GetIntentVersionsOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetIntentVersions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetIntentVersionsInput,
    GetIntentVersionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetIntentVersionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<GetIntentVersionsInput, GetIntentVersionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetIntentVersionsInput, GetIntentVersionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
