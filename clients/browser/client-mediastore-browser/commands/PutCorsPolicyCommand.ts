import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { PutCorsPolicy } from "../model/PutCorsPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutCorsPolicyInput } from "../types/PutCorsPolicyInput";
import { PutCorsPolicyOutput } from "../types/PutCorsPolicyOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/PutCorsPolicyInput";
export * from "../types/PutCorsPolicyOutput";
export * from "../types/PutCorsPolicyExceptionsUnion";

export class PutCorsPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutCorsPolicyInput,
      OutputTypesUnion,
      PutCorsPolicyOutput,
      MediaStoreResolvedConfiguration,
      Blob
    > {
  readonly model = PutCorsPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutCorsPolicyInput,
    PutCorsPolicyOutput,
    Blob
  >();

  constructor(readonly input: PutCorsPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<PutCorsPolicyInput, PutCorsPolicyOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutCorsPolicyInput, PutCorsPolicyOutput>(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
