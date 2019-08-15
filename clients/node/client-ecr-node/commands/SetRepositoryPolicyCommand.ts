import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SetRepositoryPolicy } from "../model/operations/SetRepositoryPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SetRepositoryPolicyInput } from "../types/SetRepositoryPolicyInput";
import { SetRepositoryPolicyOutput } from "../types/SetRepositoryPolicyOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/SetRepositoryPolicyInput";
export * from "../types/SetRepositoryPolicyOutput";
export * from "../types/SetRepositoryPolicyExceptionsUnion";

export class SetRepositoryPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SetRepositoryPolicyInput,
      OutputTypesUnion,
      SetRepositoryPolicyOutput,
      ECRResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SetRepositoryPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SetRepositoryPolicyInput,
    SetRepositoryPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: SetRepositoryPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SetRepositoryPolicyInput,
    SetRepositoryPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SetRepositoryPolicyInput, SetRepositoryPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
