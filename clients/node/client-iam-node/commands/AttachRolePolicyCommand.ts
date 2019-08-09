import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { AttachRolePolicy } from "../model/AttachRolePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { AttachRolePolicyInput } from "../types/AttachRolePolicyInput";
import { AttachRolePolicyOutput } from "../types/AttachRolePolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/AttachRolePolicyInput";
export * from "../types/AttachRolePolicyOutput";
export * from "../types/AttachRolePolicyExceptionsUnion";

export class AttachRolePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      AttachRolePolicyInput,
      OutputTypesUnion,
      AttachRolePolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = AttachRolePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    AttachRolePolicyInput,
    AttachRolePolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: AttachRolePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<AttachRolePolicyInput, AttachRolePolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<AttachRolePolicyInput, AttachRolePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
