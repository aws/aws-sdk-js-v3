import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyClusterParameterGroup } from "../model/operations/ModifyClusterParameterGroup";
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
      _stream.Readable
    > {
  readonly model = ModifyClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyClusterParameterGroupInput,
    ModifyClusterParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
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
