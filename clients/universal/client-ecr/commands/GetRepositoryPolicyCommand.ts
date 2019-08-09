import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRepositoryPolicy } from "../model/GetRepositoryPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRepositoryPolicyInput } from "../types/GetRepositoryPolicyInput";
import { GetRepositoryPolicyOutput } from "../types/GetRepositoryPolicyOutput";
import { ECRResolvedConfiguration } from "../ECRConfiguration";
export * from "../types/GetRepositoryPolicyInput";
export * from "../types/GetRepositoryPolicyOutput";
export * from "../types/GetRepositoryPolicyExceptionsUnion";

export class GetRepositoryPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRepositoryPolicyInput,
      OutputTypesUnion,
      GetRepositoryPolicyOutput,
      ECRResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetRepositoryPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRepositoryPolicyInput,
    GetRepositoryPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: GetRepositoryPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ECRResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRepositoryPolicyInput,
    GetRepositoryPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetRepositoryPolicyInput, GetRepositoryPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
