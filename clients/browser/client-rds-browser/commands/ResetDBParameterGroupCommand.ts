import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ResetDBParameterGroup } from "../model/ResetDBParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetDBParameterGroupInput } from "../types/ResetDBParameterGroupInput";
import { ResetDBParameterGroupOutput } from "../types/ResetDBParameterGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ResetDBParameterGroupInput";
export * from "../types/ResetDBParameterGroupOutput";
export * from "../types/ResetDBParameterGroupExceptionsUnion";

export class ResetDBParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetDBParameterGroupInput,
      OutputTypesUnion,
      ResetDBParameterGroupOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = ResetDBParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetDBParameterGroupInput,
    ResetDBParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: ResetDBParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetDBParameterGroupInput,
    ResetDBParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ResetDBParameterGroupInput, ResetDBParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
