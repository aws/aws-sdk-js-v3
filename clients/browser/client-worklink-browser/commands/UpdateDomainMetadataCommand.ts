import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { UpdateDomainMetadata } from "../model/operations/UpdateDomainMetadata";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateDomainMetadataInput } from "../types/UpdateDomainMetadataInput";
import { UpdateDomainMetadataOutput } from "../types/UpdateDomainMetadataOutput";
import { WorkLinkResolvedConfiguration } from "../WorkLinkConfiguration";
export * from "../types/UpdateDomainMetadataInput";
export * from "../types/UpdateDomainMetadataOutput";
export * from "../types/UpdateDomainMetadataExceptionsUnion";

export class UpdateDomainMetadataCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateDomainMetadataInput,
      OutputTypesUnion,
      UpdateDomainMetadataOutput,
      WorkLinkResolvedConfiguration,
      Blob
    > {
  readonly model = UpdateDomainMetadata;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateDomainMetadataInput,
    UpdateDomainMetadataOutput,
    Blob
  >();

  constructor(readonly input: UpdateDomainMetadataInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkLinkResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateDomainMetadataInput,
    UpdateDomainMetadataOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateDomainMetadataInput, UpdateDomainMetadataOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
