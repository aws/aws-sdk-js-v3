import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetBotChannelAssociation } from "../model/GetBotChannelAssociation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetBotChannelAssociationInput } from "../types/GetBotChannelAssociationInput";
import { GetBotChannelAssociationOutput } from "../types/GetBotChannelAssociationOutput";
import { LexModelBuildingServiceResolvedConfiguration } from "../LexModelBuildingServiceConfiguration";
export * from "../types/GetBotChannelAssociationInput";
export * from "../types/GetBotChannelAssociationOutput";
export * from "../types/GetBotChannelAssociationExceptionsUnion";

export class GetBotChannelAssociationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetBotChannelAssociationInput,
      OutputTypesUnion,
      GetBotChannelAssociationOutput,
      LexModelBuildingServiceResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetBotChannelAssociation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetBotChannelAssociationInput,
    GetBotChannelAssociationOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetBotChannelAssociationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: LexModelBuildingServiceResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetBotChannelAssociationInput,
    GetBotChannelAssociationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetBotChannelAssociationInput, GetBotChannelAssociationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
