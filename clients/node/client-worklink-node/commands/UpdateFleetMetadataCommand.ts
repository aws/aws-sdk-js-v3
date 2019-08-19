import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateFleetMetadata } from "../model/operations/UpdateFleetMetadata";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateFleetMetadataInput } from "../types/UpdateFleetMetadataInput";
import { UpdateFleetMetadataOutput } from "../types/UpdateFleetMetadataOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/UpdateFleetMetadataInput";
export * from "../types/UpdateFleetMetadataOutput";
export * from "../types/UpdateFleetMetadataExceptionsUnion";

export class UpdateFleetMetadataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateFleetMetadataInput,
      OutputTypesUnion,
      UpdateFleetMetadataOutput,
      WorkLinkResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateFleetMetadata;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateFleetMetadataInput,
    UpdateFleetMetadataOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateFleetMetadataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateFleetMetadataInput,
    UpdateFleetMetadataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateFleetMetadataInput, UpdateFleetMetadataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
