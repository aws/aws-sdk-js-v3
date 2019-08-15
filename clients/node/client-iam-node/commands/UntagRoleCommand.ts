import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UntagRole } from "../model/operations/UntagRole";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UntagRoleInput } from "../types/UntagRoleInput";
import { UntagRoleOutput } from "../types/UntagRoleOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UntagRoleInput";
export * from "../types/UntagRoleOutput";
export * from "../types/UntagRoleExceptionsUnion";

export class UntagRoleCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UntagRoleInput,
      OutputTypesUnion,
      UntagRoleOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UntagRole;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UntagRoleInput,
    UntagRoleOutput,
    _stream.Readable
  >();

  constructor(readonly input: UntagRoleInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<UntagRoleInput, UntagRoleOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UntagRoleInput, UntagRoleOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
