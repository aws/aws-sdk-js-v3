import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPermissions } from "../model/ListPermissions";
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
      Blob
    > {
  readonly model = ListPermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPermissionsInput,
    ListPermissionsOutput,
    Blob
  >();

  constructor(readonly input: ListPermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
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
