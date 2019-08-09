import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBotChannelAssociations } from "../model/GetBotChannelAssociations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBotChannelAssociationsInput } from "../types/GetBotChannelAssociationsInput";
import { GetBotChannelAssociationsOutput } from "../types/GetBotChannelAssociationsOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBotChannelAssociationsInput";
export * from "../types/GetBotChannelAssociationsOutput";
export * from "../types/GetBotChannelAssociationsExceptionsUnion";

export class GetBotChannelAssociationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBotChannelAssociationsInput,
      OutputTypesUnion,
      GetBotChannelAssociationsOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBotChannelAssociations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBotChannelAssociationsInput,
    GetBotChannelAssociationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBotChannelAssociationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBotChannelAssociationsInput,
    GetBotChannelAssociationsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBotChannelAssociationsInput, GetBotChannelAssociationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
