import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetDataRetrievalPolicy } from "../model/GetDataRetrievalPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetDataRetrievalPolicyInput } from "../types/GetDataRetrievalPolicyInput";
import { GetDataRetrievalPolicyOutput } from "../types/GetDataRetrievalPolicyOutput";
import { GlacierResolvedConfiguration } from "../GlacierConfiguration";
export * from "../types/GetDataRetrievalPolicyInput";
export * from "../types/GetDataRetrievalPolicyOutput";
export * from "../types/GetDataRetrievalPolicyExceptionsUnion";

export class GetDataRetrievalPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetDataRetrievalPolicyInput,
      OutputTypesUnion,
      GetDataRetrievalPolicyOutput,
      GlacierResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetDataRetrievalPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetDataRetrievalPolicyInput,
    GetDataRetrievalPolicyOutput,
    Uint8Array
  >();

  constructor(readonly input: GetDataRetrievalPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: GlacierResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetDataRetrievalPolicyInput,
    GetDataRetrievalPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetDataRetrievalPolicyInput, GetDataRetrievalPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
