import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetRateBasedRuleManagedKeys } from "../model/operations/GetRateBasedRuleManagedKeys";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetRateBasedRuleManagedKeysInput } from "../types/GetRateBasedRuleManagedKeysInput";
import { GetRateBasedRuleManagedKeysOutput } from "../types/GetRateBasedRuleManagedKeysOutput";
import { WAFRegionalResolvedConfiguration } from "../WAFRegionalConfiguration";
export * from "../types/GetRateBasedRuleManagedKeysInput";
export * from "../types/GetRateBasedRuleManagedKeysOutput";
export * from "../types/GetRateBasedRuleManagedKeysExceptionsUnion";

export class GetRateBasedRuleManagedKeysCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetRateBasedRuleManagedKeysInput,
      OutputTypesUnion,
      GetRateBasedRuleManagedKeysOutput,
      WAFRegionalResolvedConfiguration,
      Blob
    > {
  readonly model = GetRateBasedRuleManagedKeys;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetRateBasedRuleManagedKeysInput,
    GetRateBasedRuleManagedKeysOutput,
    Blob
  >();

  constructor(readonly input: GetRateBasedRuleManagedKeysInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: WAFRegionalResolvedConfiguration
  ): __aws_sdk_types.Handler<
    GetRateBasedRuleManagedKeysInput,
    GetRateBasedRuleManagedKeysOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        GetRateBasedRuleManagedKeysInput,
        GetRateBasedRuleManagedKeysOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
