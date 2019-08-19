import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { GetEffectivePolicies } from "../model/operations/GetEffectivePolicies";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetEffectivePoliciesInput } from "../types/GetEffectivePoliciesInput";
import { GetEffectivePoliciesOutput } from "../types/GetEffectivePoliciesOutput";
import { IoTResolvedConfiguration } from "../IoTConfiguration";
export * from "../types/GetEffectivePoliciesInput";
export * from "../types/GetEffectivePoliciesOutput";
export * from "../types/GetEffectivePoliciesExceptionsUnion";

export class GetEffectivePoliciesCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetEffectivePoliciesInput,
      OutputTypesUnion,
      GetEffectivePoliciesOutput,
      IoTResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = GetEffectivePolicies;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetEffectivePoliciesInput,
    GetEffectivePoliciesOutput,
    _stream.Readable
  >();

  constructor(readonly input: GetEffectivePoliciesInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: IoTResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetEffectivePoliciesInput,
    GetEffectivePoliciesOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetEffectivePoliciesInput, GetEffectivePoliciesOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
