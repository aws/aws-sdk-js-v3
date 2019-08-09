import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetClusterParameterGroup } from "../model/ResetClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetClusterParameterGroupInput } from "../types/ResetClusterParameterGroupInput";
import { ResetClusterParameterGroupOutput } from "../types/ResetClusterParameterGroupOutput";
import { RedshiftResolvedConfiguration } from "../RedshiftConfiguration";
export * from "../types/ResetClusterParameterGroupInput";
export * from "../types/ResetClusterParameterGroupOutput";
export * from "../types/ResetClusterParameterGroupExceptionsUnion";

export class ResetClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetClusterParameterGroupInput,
      OutputTypesUnion,
      ResetClusterParameterGroupOutput,
      RedshiftResolvedConfiguration,
      Blob
    > {
  readonly model = ResetClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetClusterParameterGroupInput,
    ResetClusterParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: ResetClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RedshiftResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetClusterParameterGroupInput,
    ResetClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ResetClusterParameterGroupInput,
        ResetClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
