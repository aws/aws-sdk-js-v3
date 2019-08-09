import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyDBClusterParameterGroup } from "../model/ModifyDBClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBClusterParameterGroupInput } from "../types/ModifyDBClusterParameterGroupInput";
import { ModifyDBClusterParameterGroupOutput } from "../types/ModifyDBClusterParameterGroupOutput";
import { DocDBResolvedConfiguration } from "../DocDBConfiguration";
export * from "../types/ModifyDBClusterParameterGroupInput";
export * from "../types/ModifyDBClusterParameterGroupOutput";
export * from "../types/ModifyDBClusterParameterGroupExceptionsUnion";

export class ModifyDBClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBClusterParameterGroupInput,
      OutputTypesUnion,
      ModifyDBClusterParameterGroupOutput,
      DocDBResolvedConfiguration,
      Uint8Array
    > {
  readonly model = ModifyDBClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBClusterParameterGroupInput,
    ModifyDBClusterParameterGroupOutput,
    Uint8Array
  >();

  constructor(readonly input: ModifyDBClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Uint8Array
    >,
    configuration: DocDBResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyDBClusterParameterGroupInput,
    ModifyDBClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ModifyDBClusterParameterGroupInput,
        ModifyDBClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
