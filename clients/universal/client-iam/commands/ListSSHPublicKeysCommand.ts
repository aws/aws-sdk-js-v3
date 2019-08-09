import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ListSSHPublicKeys } from "../model/ListSSHPublicKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ListSSHPublicKeysInput } from "../types/ListSSHPublicKeysInput";
import { ListSSHPublicKeysOutput } from "../types/ListSSHPublicKeysOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/ListSSHPublicKeysInput";
export * from "../types/ListSSHPublicKeysOutput";
export * from "../types/ListSSHPublicKeysExceptionsUnion";

export class ListSSHPublicKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ListSSHPublicKeysInput,
      OutputTypesUnion,
      ListSSHPublicKeysOutput,
      IAMResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ListSSHPublicKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSSHPublicKeysInput,
    ListSSHPublicKeysOutput,
    Uint8Array
  >();

  constructor(readonly input: ListSSHPublicKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<ListSSHPublicKeysInput, ListSSHPublicKeysOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ListSSHPublicKeysInput, ListSSHPublicKeysOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
