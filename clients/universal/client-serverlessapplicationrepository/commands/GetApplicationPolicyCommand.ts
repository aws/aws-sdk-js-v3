import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetApplicationPolicy } from "../model/GetApplicationPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetApplicationPolicyInput } from "../types/GetApplicationPolicyInput";
import { GetApplicationPolicyOutput } from "../types/GetApplicationPolicyOutput";
import { ServerlessApplicationRepositoryResolvedConfiguration } from "../ServerlessApplicationRepositoryConfiguration";
export * from "../types/GetApplicationPolicyInput";
export * from "../types/GetApplicationPolicyOutput";
export * from "../types/GetApplicationPolicyExceptionsUnion";

export class GetApplicationPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetApplicationPolicyInput,
      OutputTypesUnion,
      GetApplicationPolicyOutput,
      ServerlessApplicationRepositoryResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetApplicationPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetApplicationPolicyInput,
    GetApplicationPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: GetApplicationPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: ServerlessApplicationRepositoryResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetApplicationPolicyInput,
    GetApplicationPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetApplicationPolicyInput, GetApplicationPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
