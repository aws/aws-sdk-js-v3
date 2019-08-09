import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { CreateOrganizationalUnit } from "../model/CreateOrganizationalUnit";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateOrganizationalUnitInput } from "../types/CreateOrganizationalUnitInput";
import { CreateOrganizationalUnitOutput } from "../types/CreateOrganizationalUnitOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/CreateOrganizationalUnitInput";
export * from "../types/CreateOrganizationalUnitOutput";
export * from "../types/CreateOrganizationalUnitExceptionsUnion";

export class CreateOrganizationalUnitCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateOrganizationalUnitInput,
      OutputTypesUnion,
      CreateOrganizationalUnitOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = CreateOrganizationalUnit;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateOrganizationalUnitInput,
    CreateOrganizationalUnitOutput,
    _stream.Readable
  >();

  constructor(readonly input: CreateOrganizationalUnitInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateOrganizationalUnitInput,
    CreateOrganizationalUnitOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<CreateOrganizationalUnitInput, CreateOrganizationalUnitOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
