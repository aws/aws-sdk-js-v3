import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetRegions } from "../model/GetRegions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRegionsInput } from "../types/GetRegionsInput";
import { GetRegionsOutput } from "../types/GetRegionsOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/GetRegionsInput";
export * from "../types/GetRegionsOutput";
export * from "../types/GetRegionsExceptionsUnion";

export class GetRegionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRegionsInput,
      OutputTypesUnion,
      GetRegionsOutput,
      LightsailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetRegions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRegionsInput,
    GetRegionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetRegionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<GetRegionsInput, GetRegionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRegionsInput, GetRegionsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
