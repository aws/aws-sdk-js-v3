import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListPublicKeys } from "../model/ListPublicKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListPublicKeysInput } from "../types/ListPublicKeysInput";
import { ListPublicKeysOutput } from "../types/ListPublicKeysOutput";
import { CloudTrailResolvedConfiguration } from "../CloudTrailConfiguration";
export * from "../types/ListPublicKeysInput";
export * from "../types/ListPublicKeysOutput";
export * from "../types/ListPublicKeysExceptionsUnion";

export class ListPublicKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListPublicKeysInput,
      OutputTypesUnion,
      ListPublicKeysOutput,
      CloudTrailResolvedConfiguration,
      Blob
    > {
  readonly model = ListPublicKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListPublicKeysInput,
    ListPublicKeysOutput,
    Blob
  >();

  constructor(readonly input: ListPublicKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: CloudTrailResolvedConfiguration
  ): __aws_sdk_types.Handler<ListPublicKeysInput, ListPublicKeysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListPublicKeysInput, ListPublicKeysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
