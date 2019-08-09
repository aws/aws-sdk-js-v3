import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListProtectedResources } from "../model/ListProtectedResources";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListProtectedResourcesInput } from "../types/ListProtectedResourcesInput";
import { ListProtectedResourcesOutput } from "../types/ListProtectedResourcesOutput";
import { BackupResolvedConfiguration } from "../BackupConfiguration";
export * from "../types/ListProtectedResourcesInput";
export * from "../types/ListProtectedResourcesOutput";
export * from "../types/ListProtectedResourcesExceptionsUnion";

export class ListProtectedResourcesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListProtectedResourcesInput,
      OutputTypesUnion,
      ListProtectedResourcesOutput,
      BackupResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListProtectedResources;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListProtectedResourcesInput,
    ListProtectedResourcesOutput,
    Uint8Array
  >();

  constructor(readonly input: ListProtectedResourcesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: BackupResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ListProtectedResourcesInput,
    ListProtectedResourcesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListProtectedResourcesInput, ListProtectedResourcesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
