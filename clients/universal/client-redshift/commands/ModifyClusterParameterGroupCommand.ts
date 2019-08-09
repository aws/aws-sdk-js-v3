import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyClusterParameterGroup } from "../model/ModifyClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyClusterParameterGroupInput } from "../types/ModifyClusterParameterGroupInput";
import { ModifyClusterParameterGroupOutput } from "../types/ModifyClusterParameterGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ModifyClusterParameterGroupInput";
export * from "../types/ModifyClusterParameterGroupOutput";
export * from "../types/ModifyClusterParameterGroupExceptionsUnion";

export class ModifyClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyClusterParameterGroupInput,
      OutputTypesUnion,
      ModifyClusterParameterGroupOutput,
      RedshiftResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterParameterGroupInput,
    ModifyClusterParameterGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyClusterParameterGroupInput,
    ModifyClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyClusterParameterGroupInput,
        ModifyClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
