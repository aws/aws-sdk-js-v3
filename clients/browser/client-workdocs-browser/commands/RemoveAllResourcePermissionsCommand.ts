import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { RemoveAllResourcePermissions } from "../model/operations/RemoveAllResourcePermissions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { RemoveAllResourcePermissionsInput } from "../types/RemoveAllResourcePermissionsInput";
import { RemoveAllResourcePermissionsOutput } from "../types/RemoveAllResourcePermissionsOutput";
import { WorkDocsResolvedConfiguration } from "../WorkDocsConfiguration";
export * from "../types/RemoveAllResourcePermissionsInput";
export * from "../types/RemoveAllResourcePermissionsOutput";
export * from "../types/RemoveAllResourcePermissionsExceptionsUnion";

export class RemoveAllResourcePermissionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      RemoveAllResourcePermissionsInput,
      OutputTypesUnion,
      RemoveAllResourcePermissionsOutput,
      WorkDocsResolvedConfiguration,
      Blob
    > {
  readonly model = RemoveAllResourcePermissions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    RemoveAllResourcePermissionsInput,
    RemoveAllResourcePermissionsOutput,
    Blob
  >();

  constructor(readonly input: RemoveAllResourcePermissionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WorkDocsResolvedConfiguration
  ): __aws_sdk_types.Handler<
    RemoveAllResourcePermissionsInput,
    RemoveAllResourcePermissionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        RemoveAllResourcePermissionsInput,
        RemoveAllResourcePermissionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
