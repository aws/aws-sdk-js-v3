import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSecrets } from "../model/ListSecrets";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSecretsInput } from "../types/ListSecretsInput";
import { ListSecretsOutput } from "../types/ListSecretsOutput";
import { SecretsManagerResolvedConfiguration } from "../SecretsManagerConfiguration";
export * from "../types/ListSecretsInput";
export * from "../types/ListSecretsOutput";
export * from "../types/ListSecretsExceptionsUnion";

export class ListSecretsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSecretsInput,
      OutputTypesUnion,
      ListSecretsOutput,
      SecretsManagerResolvedConfiguration,
      Blob
    > {
  readonly model = ListSecrets;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSecretsInput,
    ListSecretsOutput,
    Blob
  >();

  constructor(readonly input: ListSecretsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: SecretsManagerResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSecretsInput, ListSecretsOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSecretsInput, ListSecretsOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
