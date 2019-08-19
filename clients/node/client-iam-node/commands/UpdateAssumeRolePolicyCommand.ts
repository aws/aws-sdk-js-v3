import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { UpdateAssumeRolePolicy } from "../model/operations/UpdateAssumeRolePolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { UpdateAssumeRolePolicyInput } from "../types/UpdateAssumeRolePolicyInput";
import { UpdateAssumeRolePolicyOutput } from "../types/UpdateAssumeRolePolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/UpdateAssumeRolePolicyInput";
export * from "../types/UpdateAssumeRolePolicyOutput";
export * from "../types/UpdateAssumeRolePolicyExceptionsUnion";

export class UpdateAssumeRolePolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      UpdateAssumeRolePolicyInput,
      OutputTypesUnion,
      UpdateAssumeRolePolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = UpdateAssumeRolePolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    UpdateAssumeRolePolicyInput,
    UpdateAssumeRolePolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: UpdateAssumeRolePolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    UpdateAssumeRolePolicyInput,
    UpdateAssumeRolePolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<UpdateAssumeRolePolicyInput, UpdateAssumeRolePolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
