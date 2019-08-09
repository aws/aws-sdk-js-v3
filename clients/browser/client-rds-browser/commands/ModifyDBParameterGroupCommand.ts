import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { ModifyDBParameterGroup } from "../model/ModifyDBParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { ModifyDBParameterGroupInput } from "../types/ModifyDBParameterGroupInput";
import { ModifyDBParameterGroupOutput } from "../types/ModifyDBParameterGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/ModifyDBParameterGroupInput";
export * from "../types/ModifyDBParameterGroupOutput";
export * from "../types/ModifyDBParameterGroupExceptionsUnion";

export class ModifyDBParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      ModifyDBParameterGroupInput,
      OutputTypesUnion,
      ModifyDBParameterGroupOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = ModifyDBParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    ModifyDBParameterGroupInput,
    ModifyDBParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: ModifyDBParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    ModifyDBParameterGroupInput,
    ModifyDBParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<ModifyDBParameterGroupInput, ModifyDBParameterGroupOutput>(
        handlerExecutionContext
      ),
      handlerExecutionContext
    );
  }
}
