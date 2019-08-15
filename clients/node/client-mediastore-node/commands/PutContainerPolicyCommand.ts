import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutContainerPolicy } from "../model/operations/PutContainerPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutContainerPolicyInput } from "../types/PutContainerPolicyInput";
import { PutContainerPolicyOutput } from "../types/PutContainerPolicyOutput";
import { MediaStoreResolvedConfiguration } from "../MediaStoreConfiguration";
export * from "../types/PutContainerPolicyInput";
export * from "../types/PutContainerPolicyOutput";
export * from "../types/PutContainerPolicyExceptionsUnion";

export class PutContainerPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutContainerPolicyInput,
      OutputTypesUnion,
      PutContainerPolicyOutput,
      MediaStoreResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutContainerPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutContainerPolicyInput,
    PutContainerPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutContainerPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: MediaStoreResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutContainerPolicyInput,
    PutContainerPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutContainerPolicyInput, PutContainerPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
