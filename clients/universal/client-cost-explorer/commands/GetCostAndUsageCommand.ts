import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { GetCostAndUsage } from "../model/GetCostAndUsage";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { GetCostAndUsageInput } from "../types/GetCostAndUsageInput";
import { GetCostAndUsageOutput } from "../types/GetCostAndUsageOutput";
import { CostExplorerResolvedConfiguration } from "../CostExplorerConfiguration";
export * from "../types/GetCostAndUsageInput";
export * from "../types/GetCostAndUsageOutput";
export * from "../types/GetCostAndUsageExceptionsUnion";

export class GetCostAndUsageCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      GetCostAndUsageInput,
      OutputTypesUnion,
      GetCostAndUsageOutput,
      CostExplorerResolvedConfiguration,
      Uint8Array
    > {
  readonly model = GetCostAndUsage;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    GetCostAndUsageInput,
    GetCostAndUsageOutput,
    Uint8Array
  >();

  constructor(readonly input: GetCostAndUsageInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: CostExplorerResolvedConfiguration
  ): __aws_sdk_types.Handler<GetCostAndUsageInput, GetCostAndUsageOutput> {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<GetCostAndUsageInput, GetCostAndUsageOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
