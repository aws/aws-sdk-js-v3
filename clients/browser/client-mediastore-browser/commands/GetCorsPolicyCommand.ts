import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCorsPolicy } from "../model/GetCorsPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCorsPolicyInput } from "../types/GetCorsPolicyInput";
import { GetCorsPolicyOutput } from "../types/GetCorsPolicyOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/GetCorsPolicyInput";
export * from "../types/GetCorsPolicyOutput";
export * from "../types/GetCorsPolicyExceptionsUnion";

export class GetCorsPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCorsPolicyInput,
      OutputTypesUnion,
      GetCorsPolicyOutput,
      MediaStoreResolvedConfiguration,
      Blob
    > {
  readonly model = GetCorsPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCorsPolicyInput,
    GetCorsPolicyOutput,
    Blob
  >();

  constructor(readonly input: GetCorsPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCorsPolicyInput, GetCorsPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCorsPolicyInput, GetCorsPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
