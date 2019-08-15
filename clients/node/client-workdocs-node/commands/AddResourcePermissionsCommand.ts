import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AddResourcePermissions } from "../model/operations/AddResourcePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AddResourcePermissionsInput } from "../types/AddResourcePermissionsInput";
import { AddResourcePermissionsOutput } from "../types/AddResourcePermissionsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/AddResourcePermissionsInput";
export * from "../types/AddResourcePermissionsOutput";
export * from "../types/AddResourcePermissionsExceptionsUnion";

export class AddResourcePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AddResourcePermissionsInput,
      OutputTypesUnion,
      AddResourcePermissionsOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AddResourcePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AddResourcePermissionsInput,
    AddResourcePermissionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: AddResourcePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    AddResourcePermissionsInput,
    AddResourcePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AddResourcePermissionsInput, AddResourcePermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
