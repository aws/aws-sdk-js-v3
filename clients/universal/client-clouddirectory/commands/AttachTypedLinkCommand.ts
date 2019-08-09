import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { AttachTypedLink } from "../model/AttachTypedLink";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachTypedLinkInput } from "../types/AttachTypedLinkInput";
import { AttachTypedLinkOutput } from "../types/AttachTypedLinkOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/AttachTypedLinkInput";
export * from "../types/AttachTypedLinkOutput";
export * from "../types/AttachTypedLinkExceptionsUnion";

export class AttachTypedLinkCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachTypedLinkInput,
      OutputTypesUnion,
      AttachTypedLinkOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = AttachTypedLink;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachTypedLinkInput,
    AttachTypedLinkOutput,
    Uint8Array
  >();

  constructor(readonly input: AttachTypedLinkInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachTypedLinkInput, AttachTypedLinkOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachTypedLinkInput, AttachTypedLinkOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
