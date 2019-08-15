import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { RemoveResourcePermission } from "../model/operations/RemoveResourcePermission";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveResourcePermissionInput } from "../types/RemoveResourcePermissionInput";
import { RemoveResourcePermissionOutput } from "../types/RemoveResourcePermissionOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/RemoveResourcePermissionInput";
export * from "../types/RemoveResourcePermissionOutput";
export * from "../types/RemoveResourcePermissionExceptionsUnion";

export class RemoveResourcePermissionCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveResourcePermissionInput,
      OutputTypesUnion,
      RemoveResourcePermissionOutput,
      WorkDocsResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = RemoveResourcePermission;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveResourcePermissionInput,
    RemoveResourcePermissionOutput,
    _stream.Readable
  >();

  constructor(readonly input: RemoveResourcePermissionInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveResourcePermissionInput,
    RemoveResourcePermissionOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<RemoveResourcePermissionInput, RemoveResourcePermissionOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
