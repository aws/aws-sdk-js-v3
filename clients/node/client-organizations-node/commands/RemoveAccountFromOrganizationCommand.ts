import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveAccountFromOrganization } from "../model/operations/RemoveAccountFromOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveAccountFromOrganizationInput } from "../types/RemoveAccountFromOrganizationInput";
import { RemoveAccountFromOrganizationOutput } from "../types/RemoveAccountFromOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/RemoveAccountFromOrganizationInput";
export * from "../types/RemoveAccountFromOrganizationOutput";
export * from "../types/RemoveAccountFromOrganizationExceptionsUnion";

export class RemoveAccountFromOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveAccountFromOrganizationInput,
      OutputTypesUnion,
      RemoveAccountFromOrganizationOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveAccountFromOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveAccountFromOrganizationInput,
    RemoveAccountFromOrganizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveAccountFromOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveAccountFromOrganizationInput,
    RemoveAccountFromOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveAccountFromOrganizationInput,
        RemoveAccountFromOrganizationOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
