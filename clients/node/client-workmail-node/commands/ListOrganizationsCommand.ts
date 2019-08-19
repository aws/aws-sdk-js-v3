import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListOrganizations } from "../model/operations/ListOrganizations";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListOrganizationsInput } from "../types/ListOrganizationsInput";
import { ListOrganizationsOutput } from "../types/ListOrganizationsOutput";
import { WorkMailResolvedConfiguration } from "../WorkMailConfiguration";
export * from "../types/ListOrganizationsInput";
export * from "../types/ListOrganizationsOutput";
export * from "../types/ListOrganizationsExceptionsUnion";

export class ListOrganizationsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListOrganizationsInput,
      OutputTypesUnion,
      ListOrganizationsOutput,
      WorkMailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListOrganizations;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListOrganizationsInput,
    ListOrganizationsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListOrganizationsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkMailResolvedConfiguration
  ): __aws_sdk_types.Handler<ListOrganizationsInput, ListOrganizationsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListOrganizationsInput, ListOrganizationsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
