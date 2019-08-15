import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { PutDedicatedIpInPool } from "../model/operations/PutDedicatedIpInPool";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { PutDedicatedIpInPoolInput } from "../types/PutDedicatedIpInPoolInput";
import { PutDedicatedIpInPoolOutput } from "../types/PutDedicatedIpInPoolOutput";
import { PinpointEmailResolvedConfiguration } from "../PinpointEmailConfiguration";
export * from "../types/PutDedicatedIpInPoolInput";
export * from "../types/PutDedicatedIpInPoolOutput";
export * from "../types/PutDedicatedIpInPoolExceptionsUnion";

export class PutDedicatedIpInPoolCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      PutDedicatedIpInPoolInput,
      OutputTypesUnion,
      PutDedicatedIpInPoolOutput,
      PinpointEmailResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = PutDedicatedIpInPool;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    PutDedicatedIpInPoolInput,
    PutDedicatedIpInPoolOutput,
    _stream.Readable
  >();

  constructor(readonly input: PutDedicatedIpInPoolInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: PinpointEmailResolvedConfiguration
  ): __aws_sdk_types.Handler<
    PutDedicatedIpInPoolInput,
    PutDedicatedIpInPoolOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<PutDedicatedIpInPoolInput, PutDedicatedIpInPoolOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
