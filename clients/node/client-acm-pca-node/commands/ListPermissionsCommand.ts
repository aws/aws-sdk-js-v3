import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ListPermissions } from "../model/operations/ListPermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPermissionsInput } from "../types/ListPermissionsInput";
import { ListPermissionsOutput } from "../types/ListPermissionsOutput";
import { ACMPCAResolvedConfiguration } from "../ACMPCAConfiguration";
export * from "../types/ListPermissionsInput";
export * from "../types/ListPermissionsOutput";
export * from "../types/ListPermissionsExceptionsUnion";

export class ListPermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPermissionsInput,
      OutputTypesUnion,
      ListPermissionsOutput,
      ACMPCAResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ListPermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPermissionsInput,
    ListPermissionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListPermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ACMPCAResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPermissionsInput, ListPermissionsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPermissionsInput, ListPermissionsOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
