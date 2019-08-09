import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { SimulateCustomPolicy } from "../model/SimulateCustomPolicy";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { SimulateCustomPolicyInput } from "../types/SimulateCustomPolicyInput";
import { SimulateCustomPolicyOutput } from "../types/SimulateCustomPolicyOutput";
import { IAMResolvedConfiguration } from "../IAMConfiguration";
export * from "../types/SimulateCustomPolicyInput";
export * from "../types/SimulateCustomPolicyOutput";
export * from "../types/SimulateCustomPolicyExceptionsUnion";

export class SimulateCustomPolicyCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      SimulateCustomPolicyInput,
      OutputTypesUnion,
      SimulateCustomPolicyOutput,
      IAMResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = SimulateCustomPolicy;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    SimulateCustomPolicyInput,
    SimulateCustomPolicyOutput,
    _stream.Readable
  >();

  constructor(readonly input: SimulateCustomPolicyInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IAMResolvedConfiguration
  ): __aws_sdk_types.Handler<
    SimulateCustomPolicyInput,
    SimulateCustomPolicyOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<SimulateCustomPolicyInput, SimulateCustomPolicyOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
