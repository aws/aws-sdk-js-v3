import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ResetDBClusterParameterGroup } from "../model/ResetDBClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ResetDBClusterParameterGroupInput } from "../types/ResetDBClusterParameterGroupInput";
import { ResetDBClusterParameterGroupOutput } from "../types/ResetDBClusterParameterGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ResetDBClusterParameterGroupInput";
export * from "../types/ResetDBClusterParameterGroupOutput";
export * from "../types/ResetDBClusterParameterGroupExceptionsUnion";

export class ResetDBClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ResetDBClusterParameterGroupInput,
      OutputTypesUnion,
      ResetDBClusterParameterGroupOutput,
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ResetDBClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ResetDBClusterParameterGroupInput,
    ResetDBClusterParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ResetDBClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ResetDBClusterParameterGroupInput,
    ResetDBClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        ResetDBClusterParameterGroupInput,
        ResetDBClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
