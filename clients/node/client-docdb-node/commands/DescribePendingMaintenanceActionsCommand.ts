import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { DescribePendingMaintenanceActions } from "../model/DescribePendingMaintenanceActions";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { DescribePendingMaintenanceActionsInput } from "../types/DescribePendingMaintenanceActionsInput";
import { DescribePendingMaintenanceActionsOutput } from "../types/DescribePendingMaintenanceActionsOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/DescribePendingMaintenanceActionsInput";
export * from "../types/DescribePendingMaintenanceActionsOutput";
export * from "../types/DescribePendingMaintenanceActionsExceptionsUnion";

export class DescribePendingMaintenanceActionsCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      DescribePendingMaintenanceActionsInput,
      OutputTypesUnion,
      DescribePendingMaintenanceActionsOutput,
      DocDBResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = DescribePendingMaintenanceActions;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    DescribePendingMaintenanceActionsInput,
    DescribePendingMaintenanceActionsOutput,
    _stream.Readable
  >();

  constructor(readonly input: DescribePendingMaintenanceActionsInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    DescribePendingMaintenanceActionsInput,
    DescribePendingMaintenanceActionsOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        DescribePendingMaintenanceActionsInput,
        DescribePendingMaintenanceActionsOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
