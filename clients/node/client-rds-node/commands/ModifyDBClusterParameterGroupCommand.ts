import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import * as _stream from "stream";
import { ModifyDBClusterParameterGroup } from "../model/operations/ModifyDBClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBClusterParameterGroupInput } from "../types/ModifyDBClusterParameterGroupInput";
import { ModifyDBClusterParameterGroupOutput } from "../types/ModifyDBClusterParameterGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
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
      RDSResolvedConfiguration,
      _stream.Readable
    > {
  readonly model = ModifyDBClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBClusterParameterGroupInput,
    ModifyDBClusterParameterGroupOutput,
    _stream.Readable
  >();

  constructor(readonly input: ModifyDBClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      _stream.Readable
    >,
    configuration: RDSResolvedConfiguration
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
