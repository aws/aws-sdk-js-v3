import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { DeleteKnownHostKeys } from "../model/DeleteKnownHostKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DeleteKnownHostKeysInput } from "../types/DeleteKnownHostKeysInput";
import { DeleteKnownHostKeysOutput } from "../types/DeleteKnownHostKeysOutput";
import { LightsailResolvedConfiguration } from "../LightsailConfiguration";
export * from "../types/DeleteKnownHostKeysInput";
export * from "../types/DeleteKnownHostKeysOutput";
export * from "../types/DeleteKnownHostKeysExceptionsUnion";

export class DeleteKnownHostKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DeleteKnownHostKeysInput,
      OutputTypesUnion,
      DeleteKnownHostKeysOutput,
      LightsailResolvedConfiguration,
      Blob
    > {
  readonly model = DeleteKnownHostKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DeleteKnownHostKeysInput,
    DeleteKnownHostKeysOutput,
    Blob
  >();

  constructor(readonly input: DeleteKnownHostKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: LightsailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DeleteKnownHostKeysInput,
    DeleteKnownHostKeysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<DeleteKnownHostKeysInput, DeleteKnownHostKeysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
