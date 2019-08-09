import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
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
      _stream.Readable
    > {
  readonly model = ListSSHPublicKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ListSSHPublicKeysInput,
    ListSSHPublicKeysOutput,
    _stream.Readable
  >();

  constructor(readonly input: ListSSHPublicKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
