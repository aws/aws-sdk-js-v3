import * as __aws_sdk_middleware_stack from "@aws-sdk/middleware-stack";
import * as __aws_sdk_types from "@aws-sdk/types";
import { CreateDBClusterParameterGroup } from "../model/operations/CreateDBClusterParameterGroup";
import { InputTypesUnion } from "../types/InputTypesUnion";
import { OutputTypesUnion } from "../types/OutputTypesUnion";
import { CreateDBClusterParameterGroupInput } from "../types/CreateDBClusterParameterGroupInput";
import { CreateDBClusterParameterGroupOutput } from "../types/CreateDBClusterParameterGroupOutput";
import { RDSResolvedConfiguration } from "../RDSConfiguration";
export * from "../types/CreateDBClusterParameterGroupInput";
export * from "../types/CreateDBClusterParameterGroupOutput";
export * from "../types/CreateDBClusterParameterGroupExceptionsUnion";

export class CreateDBClusterParameterGroupCommand
  implements
    __aws_sdk_types.Command<
      InputTypesUnion,
      CreateDBClusterParameterGroupInput,
      OutputTypesUnion,
      CreateDBClusterParameterGroupOutput,
      RDSResolvedConfiguration,
      Blob
    > {
  readonly model = CreateDBClusterParameterGroup;
  readonly middlewareStack = new __aws_sdk_middleware_stack.MiddlewareStack<
    CreateDBClusterParameterGroupInput,
    CreateDBClusterParameterGroupOutput,
    Blob
  >();

  constructor(readonly input: CreateDBClusterParameterGroupInput) {}

  resolveMiddleware(
    clientStack: __aws_sdk_middleware_stack.MiddlewareStack<
      InputTypesUnion,
      OutputTypesUnion,
      Blob
    >,
    configuration: RDSResolvedConfiguration
  ): __aws_sdk_types.Handler<
    CreateDBClusterParameterGroupInput,
    CreateDBClusterParameterGroupOutput
  > {
    const { handler } = configuration;
    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: __aws_sdk_types.HandlerExecutionContext = {
      logger: {} as any,
      model: this.model
    };

    return stack.resolve(
      handler<
        CreateDBClusterParameterGroupInput,
        CreateDBClusterParameterGroupOutput
      >(handlerExecutionContext),
      handlerExecutionContext
    );
  }
}
