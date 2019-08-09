import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetGroupPolicy } from "../model/GetGroupPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetGroupPolicyInput } from "../types/GetGroupPolicyInput";
import { GetGroupPolicyOutput } from "../types/GetGroupPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/GetGroupPolicyInput";
export * from "../types/GetGroupPolicyOutput";
export * from "../types/GetGroupPolicyExceptionsUnion";

export class GetGroupPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetGroupPolicyInput,
      OutputTypesUnion,
      GetGroupPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetGroupPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetGroupPolicyInput,
    GetGroupPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetGroupPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<GetGroupPolicyInput, GetGroupPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetGroupPolicyInput, GetGroupPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
