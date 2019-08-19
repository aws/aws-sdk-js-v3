import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetTypedLinkFacetInformation } from "../model/operations/GetTypedLinkFacetInformation";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetTypedLinkFacetInformationInput } from "../types/GetTypedLinkFacetInformationInput";
import { GetTypedLinkFacetInformationOutput } from "../types/GetTypedLinkFacetInformationOutput";
import { CloudDirectoryResolvedConfiguration } from "../CloudDirectoryConfiguration";
export * from "../types/GetTypedLinkFacetInformationInput";
export * from "../types/GetTypedLinkFacetInformationOutput";
export * from "../types/GetTypedLinkFacetInformationExceptionsUnion";

export class GetTypedLinkFacetInformationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetTypedLinkFacetInformationInput,
      OutputTypesUnion,
      GetTypedLinkFacetInformationOutput,
      CloudDirectoryResolvedConfiguration,
      Blob
    > {
  readonly model = GetTypedLinkFacetInformation;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetTypedLinkFacetInformationInput,
    GetTypedLinkFacetInformationOutput,
    Blob
  >();

  constructor(readonly input: GetTypedLinkFacetInformationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudDirectoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetTypedLinkFacetInformationInput,
    GetTypedLinkFacetInformationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetTypedLinkFacetInformationInput,
        GetTypedLinkFacetInformationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
