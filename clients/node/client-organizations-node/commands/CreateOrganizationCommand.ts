import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateOrganization } from "../model/CreateOrganization";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOrganizationInput } from "../types/CreateOrganizationInput";
import { CreateOrganizationOutput } from "../types/CreateOrganizationOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/CreateOrganizationInput";
export * from "../types/CreateOrganizationOutput";
export * from "../types/CreateOrganizationExceptionsUnion";

export class CreateOrganizationCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOrganizationInput,
      OutputTypesUnion,
      CreateOrganizationOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateOrganization;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOrganizationInput,
    CreateOrganizationOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateOrganizationInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateOrganizationInput,
    CreateOrganizationOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateOrganizationInput, CreateOrganizationOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
