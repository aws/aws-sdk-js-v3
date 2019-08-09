import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetLinkAttributes } from "../model/GetLinkAttributes";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetLinkAttributesInput } from "../types/GetLinkAttributesInput";
import { GetLinkAttributesOutput } from "../types/GetLinkAttributesOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/GetLinkAttributesInput";
export * from "../types/GetLinkAttributesOutput";
export * from "../types/GetLinkAttributesExceptionsUnion";

export class GetLinkAttributesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetLinkAttributesInput,
      OutputTypesUnion,
      GetLinkAttributesOutput,
      CloudDirectoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetLinkAttributes;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetLinkAttributesInput,
    GetLinkAttributesOutput,
    Uint8Array
  >();

  constructor(readonly input: GetLinkAttributesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<GetLinkAttributesInput, GetLinkAttributesOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetLinkAttributesInput, GetLinkAttributesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
