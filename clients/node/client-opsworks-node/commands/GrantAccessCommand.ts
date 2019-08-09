import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GrantAccess } from "../model/GrantAccess";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GrantAccessInput } from "../types/GrantAccessInput";
import { GrantAccessOutput } from "../types/GrantAccessOutput";
import { OpsWorksResolvedConfiguration } from "../OpsWorksConfiguration";
export * from "../types/GrantAccessInput";
export * from "../types/GrantAccessOutput";
export * from "../types/GrantAccessExceptionsUnion";

export class GrantAccessCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GrantAccessInput,
      OutputTypesUnion,
      GrantAccessOutput,
      OpsWorksResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GrantAccess;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GrantAccessInput,
    GrantAccessOutput,
    _stream.Readable
  >();

  constructor(readonly input: GrantAccessInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: OpsWorksResolvedConfiguration
  ): __aws_sdk_types.Handler<GrantAccessInput, GrantAccessOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GrantAccessInput, GrantAccessOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
