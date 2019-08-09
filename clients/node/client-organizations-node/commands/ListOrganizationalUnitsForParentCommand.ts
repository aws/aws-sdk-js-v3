import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListOrganizationalUnitsForParent } from "../model/ListOrganizationalUnitsForParent";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOrganizationalUnitsForParentInput } from "../types/ListOrganizationalUnitsForParentInput";
import { ListOrganizationalUnitsForParentOutput } from "../types/ListOrganizationalUnitsForParentOutput";
import { OrganizationsResolvedConfiguration } from "../OrganizationsConfiguration";
export * from "../types/ListOrganizationalUnitsForParentInput";
export * from "../types/ListOrganizationalUnitsForParentOutput";
export * from "../types/ListOrganizationalUnitsForParentExceptionsUnion";

export class ListOrganizationalUnitsForParentCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOrganizationalUnitsForParentInput,
      OutputTypesUnion,
      ListOrganizationalUnitsForParentOutput,
      OrganizationsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListOrganizationalUnitsForParent;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOrganizationalUnitsForParentInput,
    ListOrganizationalUnitsForParentOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListOrganizationalUnitsForParentInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OrganizationsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListOrganizationalUnitsForParentInput,
    ListOrganizationalUnitsForParentOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ListOrganizationalUnitsForParentInput,
        ListOrganizationalUnitsForParentOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
