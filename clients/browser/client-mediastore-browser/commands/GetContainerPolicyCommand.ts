import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetContainerPolicy } from "../model/GetContainerPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetContainerPolicyInput } from "../types/GetContainerPolicyInput";
import { GetContainerPolicyOutput } from "../types/GetContainerPolicyOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/GetContainerPolicyInput";
export * from "../types/GetContainerPolicyOutput";
export * from "../types/GetContainerPolicyExceptionsUnion";

export class GetContainerPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetContainerPolicyInput,
      OutputTypesUnion,
      GetContainerPolicyOutput,
      MediaStoreResolvedConfiguration,
      Blob
    > {
  readonly model = GetContainerPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetContainerPolicyInput,
    GetContainerPolicyOutput,
    Blob
  >();

  constructor(readonly input: GetContainerPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetContainerPolicyInput,
    GetContainerPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetContainerPolicyInput, GetContainerPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
