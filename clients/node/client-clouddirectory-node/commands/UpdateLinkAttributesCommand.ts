import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateLinkAttributes } from "../model/UpdateLinkAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateLinkAttributesInput } from "../types/UpdateLinkAttributesInput";
import { UpdateLinkAttributesOutput } from "../types/UpdateLinkAttributesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/UpdateLinkAttributesInput";
export * from "../types/UpdateLinkAttributesOutput";
export * from "../types/UpdateLinkAttributesExceptionsUnion";

export class UpdateLinkAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateLinkAttributesInput,
      OutputTypesUnion,
      UpdateLinkAttributesOutput,
      CloudDirectoryResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateLinkAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateLinkAttributesInput,
    UpdateLinkAttributesOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateLinkAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateLinkAttributesInput,
    UpdateLinkAttributesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateLinkAttributesInput, UpdateLinkAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
